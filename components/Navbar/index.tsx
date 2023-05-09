import Avatar from "./Avatar"

export default function Navbar() {
  return (
    <nav className="fixed top-4 py-2 px-3 h-16 rounded-xl w-full max-w-[700px] bg-[#292929] flex justify-between">
      <section className="flex">
        <Avatar />
        <h1 className="flex flex-col justify-center pl-3">Manuel Gudiño</h1>
      </section>
    </nav>
  )
}
