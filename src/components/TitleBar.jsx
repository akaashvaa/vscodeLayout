// import logo from '@assets/logo.svg'
// import Image from 'next/image'

export default function TitleBar() {
  return (
    <div
      id="title-bar"
      className="relative w-full h-9 text-[#b1b1b0] bg-title flex justify-center items-center text-center border-b-[1px] border-activity"
    >
      <h1 className="text-[12px]">Akash Kumar Verma</h1>
      {/* <div className=" absolute left-3  flex justify-center items-center">
        <Image src={logo} width={30} height={30} alt="profile" />
      </div> */}
    </div>
  )
}
