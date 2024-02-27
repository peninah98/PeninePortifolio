import { ReactElement, useState } from "react"
import { navItems } from "../util/navItems"
import logo from "/Logo.png"
import { Menu, X } from "lucide-react"

export default function NavBar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  const items = navItems.map((item) => (
    <div
      className={`text-white hover:text-yellow-400 hover:scale-110 cursor-pointer px-4 ${isOpen ? "block" : "hidden"} md:block`}
      key={item.title}>
      {item.title}
    </div>
  ))

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-gray-700 hover:font-semibold sticky top-0 z-50 py-6 flex justify-between items-center w-full">
      <img
        src={logo}
        alt="Penine"
        className="h-10 ml-6"
      />
      <div className="flex flex-wrap md:flex gap-10">{items}</div>
      <div
        onClick={toggle}
        className="visible md:hidden text-white">
        {isOpen ? <X /> : <Menu />}
      </div>
    </div>
  )
}
