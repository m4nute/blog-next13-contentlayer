"use client"

import { IconHome } from "@tabler/icons-react"
import Link from "next/link"

export default function HomeButton() {
  return (
    <Link href="/">
      <button className="bg-[#373737] p-2 rounded-lg transition-all hover:scale-105 duration-150">
        <IconHome size={24} stroke={1.3} />
      </button>
    </Link>
  )
}
