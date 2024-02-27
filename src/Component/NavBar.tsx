import { ReactElement } from "react"
import { navItems } from "../util/navItems"
import logo from "/Logo.png"

export default function NavBar(): ReactElement {
  const items = navItems.map((item) => (
    <div
      className="text-white hover:text-yellow-400 hover:scale-110 cursor-pointer px-4"
      key={item.title}>
      {item.title}
    </div>
  ))
  return (
    <div className="bg-gray-700 hover:font-semibold sticky top-0 z-50 py-6 hidden md:flex justify-between items-center">
      <img
        src={logo}
        alt="Penine"
        className="h-10 ml-6"
      />
      <div className="flex gap-10">{items}</div>
    </div>
  )
}
