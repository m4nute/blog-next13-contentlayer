"use client"

import { IconHome } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import Link from "next/link"

export default function HomeButton() {
  return (
    <Link href="/">
      <motion.button
        className="bg-[#373737] p-2 rounded-lg transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}>
        <IconHome size={24} stroke={1.3} />
      </motion.button>
    </Link>
  )
}
