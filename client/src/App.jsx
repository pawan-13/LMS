import MainLayout from "./layout/MainLayout"
import Login from "./pages/Login"
import HeroBanner from "./pages/student/HeroBanner"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Courses from "./pages/student/Courses"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroBanner />
            <Courses />
          </>
        )
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}
export default App