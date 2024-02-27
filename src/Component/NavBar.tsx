import { ReactElement } from "react"
import { navItems } from "../util/navItems"


export default function NavBar(): ReactElement {
  const items = navItems.map((item) => <div key={item.title}>{item.title}
  
  </div>)
  return (
    <div className="bg-gray-700">
      <img
        src=""
        alt=""
      />
      <div>{items}</div>
    </div>
  )
}
