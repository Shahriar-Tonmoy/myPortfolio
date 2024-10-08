'use client'

import Image from "next/image"
import { useEffect } from "react"

export default function Home(){

  useEffect(() =>{
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return(
    <main className="relative border flex flex-col">
      {/* <Image
        src=""
        fill={true}
        alt='Tonmoy Image'
        className=""
      /> */}
      <div className="h-lvh w-lvw bg-[#999d9e] mb-">
          
      </div>
      <div className="h-lvh w-lvw bg-white mb-">
          
      </div>

    </main>
  )
}