// import logo from '@assets/logo2.svg'
import logo from '@assets/logo3.svg'
import Image from 'next/image'

export default function MainWindow() {
  return (
    <div className="w-full h-screen flex  justify-center items-center  overflow-auto">
      {/* <div className="flex w-full h-full bg-window"></div> */}
      <div className="w-[30%] h-fit flex rounded-full bg-black justify-center items-center">
        <Image
          src={logo}
          alt="profile"
          priority={true}
          className=" w-full h-full "
        />
      </div>
    </div>
  )
}
