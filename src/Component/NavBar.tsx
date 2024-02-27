import { ReactElement } from "react"
import { navItems } from "../util/navItems"
import logo from "/Logo.png"

export default function NavBar(): ReactElement {
  const items = navItems.map((item) => (
    <div
      className="text-white hover:text-yellow-400 hover:scale-110 cursor-pointer"
      key={item.title}>
      {item.title}
    </div>
  ))
  return (
    <div className="bg-gray-700 hover:font-semibold sticky top-0 z-50">
      <img
        src={logo}
        alt="Penine"
      />
      <div className="flex justify-between py-8">{items}</div>
    </div>
  )
}
