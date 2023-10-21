'use client'
import ActivityBar from '@/components/ActivityBar'
import ActivitySideBar from '@/components/ActivitySideBar'
import MainWindow from '@/components/MainWindow'
import ResizableSidebar from '@/components/ResizablaSideBar'
import TitleBar from '@/components/TitleBar'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full ">
      {/*  Title bar*/}
      <TitleBar />

      <div className="flex  flex-row w-full">
        {/* activity bar */}
        <ActivityBar />

        {/* Resizable Activity details Side Bar bar */}
        <div className="flex flex-row w-full ">
          <ResizableSidebar>
            <ActivitySideBar />
          </ResizableSidebar>

          {/* Main window */}
          <MainWindow />
        </div>
      </div>
    </div>
  )
}
