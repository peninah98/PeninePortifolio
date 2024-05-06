import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Counter from "./Counter"

export default function Layout() {
  return (
    <>
      <NavBar />
      <Counter />
      <Outlet />
    </>
  )
}
