"use client"

import { IconHome } from "@tabler/icons-react"
import Link from "next/link"

export default function HomeButton() {
  return (
    <Link href="/" className="flex flex-col justify-center">
      <button className="bg-[#e1e1e1] dark:bg-[#373737] p-2 rounded-lg hover:scale-105 text-[#000000] dark:text-white">
        <IconHome size={24} stroke={1.3} />
      </button>
    </Link>
  )
}
