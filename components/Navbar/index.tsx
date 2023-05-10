import Avatar from "./Avatar"
import { IconHome } from "@tabler/icons-react"

export default function Navbar() {
  return (
    <div className="w-full max-w-[700px] mx-auto">
      <nav className="fixed bottom-4 py-2 px-3 h-16 rounded-xl max-w-[700px] w-full bg-[#292929] flex justify-between">
        <section className="flex">
          <Avatar />
          <h1 className="flex flex-col justify-center pl-3">Manuel Gudiño</h1>
        </section>
        <section className="flex flex-col justify-center">
          <button className="bg-[#373737] p-2 rounded-lg">
            <IconHome size={24} stroke={1.25} className="transition-all hover:stroke-2 hover:opacity-80" />
          </button>
        </section>
      </nav>
    </div>
  )
}
