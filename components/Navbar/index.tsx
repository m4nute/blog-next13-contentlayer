import Link from "next/link"
import Avatar from "./Avatar"
import HomeButton from "./HomeButton"
import ModeToggle from "./ThemeToggler"

export default function Navbar() {
  return (
    <div className="w-full max-w-[700px] mx-auto">
      <nav className="fixed bottom-4 py-2 px-3 h-16 rounded-xl max-w-[700px] w-full bg-[#e1e1e1] dark:bg-[#292929] flex justify-between z-50">
        <Link className="flex" href="https://manuelgudino.vercel.app/" target="_blank">
          <Avatar />
          <h1 className="flex flex-col justify-center pl-3 hover:underline underline-offset-4">Manuel Gudiño</h1>
        </Link>
        <section className="flex gap-3">
          <HomeButton />
          <ModeToggle />
        </section>
      </nav>
    </div>
  )
}
