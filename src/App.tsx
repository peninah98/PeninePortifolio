import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

import { ReactElement } from "react"
import Layout from "./Component/Layout"
import About from "./Component/About"
import Project from "./Component/Project"

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/project"
        element={<Project />}
      />
    </Route>
  )
)

export default function App(): ReactElement {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}
