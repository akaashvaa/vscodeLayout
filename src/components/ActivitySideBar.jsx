import arrow from '@assets/arrow.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function ActivitySideBar() {
  const { files } = useSelector((state) => state.openEditor)

  const [rotate, setRotate] = useState(false)

  return (
    <div className="flex flex-col w-full bg-title text-shaded gap-2 drop-shadow-xl">
      <p className=" text-[12px] pl-5 p-2 ">EXPLORER</p>
      <div
        className="flex flex-col justify-start items-start gap-1   cursor-pointer"
        onClick={() => setRotate(!rotate)}
      >
        <button className=" flex gap-1 w-full items-center border-[1px] border-title hover:border-shaded active:border-shaded ">
          <Image
            src={arrow}
            alt="arrow"
            width={25}
            className={rotate ? 'rotate-90' : 'rotate-0'}
          />
          <p className=" text-[13px] font-semibold">USER PROFILE</p>
        </button>

        {rotate && (
          <div className="flex flex-col gap-2 pl-7 text-[12px]">
            <p>Welcome</p>
          </div>
        )}
      </div>
    </div>
  )
}
