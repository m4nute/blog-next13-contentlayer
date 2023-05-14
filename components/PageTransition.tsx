"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <AnimatePresence mode="wait" key={path}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.05 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
