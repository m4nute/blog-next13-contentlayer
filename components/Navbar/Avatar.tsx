"use client"

import * as Av from "@radix-ui/react-avatar"

export default function Avatar() {
  return (
    <Av.Root className="inline-flex w-12 h-12 rounded-full border border-gray-600">
      <Av.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://media.licdn.com/dms/image/D4D03AQEZOpUSCHdyvQ/profile-displayphoto-shrink_800_800/0/1676219063905?e=1689206400&v=beta&t=SDPAE-nrf4aNLolIp9lNPRz3j2rJ4CyjcGn-rf5KBt4"
        alt="Manuel Gudiño"
      />
    </Av.Root>
  )
}
