"use client"

import { useTheme } from "next-themes"
import { IconSun } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <div className="flex flex-col justify-center">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-[#d1d1d1] dark:bg-[#373737] p-2 flex justify-center items-center w-10 h-10 rounded-lg hover:scale-105">
        {mounted ? (
          !theme || theme === "dark" ? (
            <IconSun size={24} stroke={1.3} color="white" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-moon-filled"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.3"
              stroke="#000000"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" fill="#000000"></path>
            </svg>
          )
        ) : null}
      </button>
    </div>
  )
}
