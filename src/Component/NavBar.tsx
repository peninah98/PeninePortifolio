import { ReactElement } from "react"
import { navItems } from "../util/navItems"
import logo from "/Logo.png"

export default function NavBar(): ReactElement {
  const items = navItems.map((item) => (
    <div
      className="text-white hover:text-yellow-400 hover:scale-110 cursor-pointer hover:font-semibold"
      key={item.title}>
      {item.title}
    </div>
  ))
  return (
    <div className="bg-gray-700 flex justify-between items-center py-8">
      <img
        src={logo}
        alt="Penine."
      />
      <div className="flex justify-between gap-20">{items}</div>
    </div>
  )
}
