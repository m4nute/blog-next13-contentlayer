"use client"

import Image from "next/image"
import ProfilePic from "../../public/image.jpg"
export default function Avatar() {
  return (
    <div className="inline-flex relative w-12 h-12 rounded-full border border-gray-600">
      <Image className="h-full w-full rounded-[inherit] object-cover" src={ProfilePic} alt="Manuel Gudiño" fill />
    </div>
  )
}
