"use client"

import { IconHome } from "@tabler/icons-react"
import * as Tooltip from "@radix-ui/react-tooltip"

export default function HomeButton() {
  return (
    <Tooltip.Provider delayDuration={80}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="bg-[#373737] p-2 rounded-lg hover:scale-105 transition-all">
            <IconHome size={24} stroke={1.3} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="rounded-[4px] bg-[#373737] text-sm px-2 py-1 will-change-[transform,opacity]" sideOffset={5}>
            Home
            <Tooltip.Arrow className="fill-[#373737]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
