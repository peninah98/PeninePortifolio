import { ReactElement } from "react"

export default function NavBar(): ReactElement {
  return (
    <div className="bg-gray-700">
      <img
        src=""
        alt=""
      />
      <ul className=" text-white flex justify-between items-center h-16 px-4 mx-10">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
