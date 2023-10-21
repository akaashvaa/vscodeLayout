import React from 'react'
import { setActiveBar } from '@/redux/activity/activitySlice'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ResizableSidebar({ children }) {
  const sidebarRef = useRef(null)
  const dispatch = useDispatch()
  const { activeBar } = useSelector((state) => state.activity)

  const fixWidth = 270
  const minWidth = 200
  const debounceDelay = 150

  const [isResizing, setIsResizing] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(fixWidth)

  /** @abstract im using this for the unwanted too many dispatching when the width is less than 200 w. we can also use lodash but i prefer not to install it though that's more easy to implement */
  let timeoutId = null // Variable to store the timeout ID

  //on click + hold i.e. onMouseDown start resizing
  const startResizing = () => setIsResizing(true)

  //on leavind the cursor i.e. onMouseUp start resizing
  const stopResizing = () => {
    setIsResizing(false)
    // Clear the timeout if resizing stops
    clearTimeout(timeoutId)
  }

  //on Moving the cursor i.e. onMouseMove start resizing
  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing && activeBar) {
        let newWidth =
          mouseMoveEvent.clientX -
          sidebarRef.current.getBoundingClientRect().left

        setSidebarWidth(newWidth)

        // if (newWidth < minWidth && activeBar) {
        //   /** @abstract User Interaction Continues: If the user continues to resize the sidebar within the debounce delay (150ms in your case), the resize function will be called repeatedly. Importantly, before setting the new timeoutId, you clear the previous one using clearTimeout(timeoutId). This effectively resets the timer every time the user continues to resize.

        //     * User Stops Resizing: When the user finally stops resizing (i.e., releases the mouse button), the stopResizing function is called, setting isResizing to false. Importantly, it also clears the timeoutId using clearTimeout(timeoutId). This ensures that if the user stops resizing within the debounce delay, the dispatch action is not executed because the timer is canceled. */
        //   clearTimeout(timeoutId)
        //   // eslint-disable-next-line react-hooks/exhaustive-deps
        //   timeoutId = setTimeout(() => {
        //     dispatch(setActiveBar(false))
        //     setSidebarWidth(fixWidth)
        //   }, debounceDelay)
        // }
      }
    },
    [activeBar, isResizing]
  )
  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)

    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResizing, resize])

  return (
    <>
      {activeBar && (
        <div
          ref={sidebarRef}
          className="app-sidebar  flex min-w-[200px] max-w-[70%] w-[40%] grow-0 shrink-0 relative"
          style={{ width: `${sidebarWidth}px` }}
          onMouseDown={(e) => e.preventDefault()}
        >
          {children}

          <div
            className="app-sidebar-resizer grow-0 shrink-0  cursor-col-resize resize-x w-[2px] bg-border  flex justify-center items-center  transition-width duration-500 drop-shadow-2xl z-30"
            onMouseDown={startResizing}
          >
            {isResizing && (
              <div className="h-[100px] w-full rounded-3xl bg-border flex flex-col justify-center items-center  text-white font-extrabold  px-2">
                <h1>.</h1>
                <h1>.</h1>
                <h1>.</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
