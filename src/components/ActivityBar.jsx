'use client'
import { activityBarElements } from '@/constant/constant'
import { setActiveBar } from '@/redux/activity/activitySlice'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '@assets/logo3.svg'

export default function ActivityBar() {
  const dispatch = useDispatch()

  const { activeBar } = useSelector((state) => state.activity)

  const [activeId, setActiveId] = useState('')
  const [hoveredElement, setHoveredElement] = useState('')

  const handleClick = (id) => {
    console.log(activeId)
    setActiveId(id)
    console.log(activeId)
    dispatch(setActiveBar(!activeBar))
  }
  return (
    <div
      id="activity-bar"
      className=" w-16  h-screen text-shaded bg-activity flex flex-col justify-between items-center "
    >
      <div className="flex w-full h-full flex-col justify-start items-center text-center gap-5">
        {activityBarElements.map((element) => (
          <div
            key={element.id}
            className="relative h-14 w-full flex  cursor-pointer justify-center items-center "
          >
            {/* generating left border indicating el is active and inactive layer on image */}
            <div
              className={`absolute left-0 h-full w-full bg-[#19181a6c] z-10 ${
                activeId === element.id && activeBar && 'border-l-2'
              }  `}
              onClick={() => handleClick(element.id)}
              onMouseEnter={() => setHoveredElement(element.id)}
              onMouseLeave={() => setHoveredElement('')}
            />

            <div className="relative flex justify-start">
              <Image
                src={element.img}
                alt={element.id}
                width={30}
                className={`  ${
                  activeId === element.id && activeBar && 'z-20'
                }  `}
                onClick={() => handleClick(element.id)}
                onMouseEnter={() => setHoveredElement(element.id)}
                onMouseLeave={() => setHoveredElement('')}
              />
              {/* Showing image title on hover */}
              <div
                className={`absolute text-start rounded-tr-md rounded-b-md px-2 py-1 ml-14 bg-window text-[13px] text-white whitespace-nowrap z-30 ${
                  hoveredElement === element.id ? 'block' : 'hidden'
                }`}
              >
                <p>{element.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="realtive   mb-14 bg-white  border-[1px] flex justify-start   items-center drop-shadow-2xl cursor-pointer rounded-full">
        <Image
          src={logo}
          alt="profile"
          width={40}
          height={40}
          // onClick={() => setActiveId(element.id)}
          onMouseEnter={() => setHoveredElement('profile')}
          onMouseLeave={() => setHoveredElement('')}
        />
        <div
          className={`absolute text-start mt-2 rounded-tr-md rounded-b-md px-2 py-1 ml-14 bg-window text-[13px] text-white whitespace-nowrap z-30 ${
            hoveredElement === 'profile' ? 'block' : 'hidden'
          }`}
        >
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}
