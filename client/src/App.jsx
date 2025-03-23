import MainLayout from "./layout/MainLayout"
import Login from "./pages/Login"
import HeroBanner from "./pages/student/HeroBanner"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Courses from "./pages/student/Courses"
import MyLearning from "./pages/student/MyLearning"
import Profile from "./pages/student/Profile"

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
      },
      {
        path: "my-learning",
        element: <MyLearning />
      },
      {
        path: "profile",
        element: <Profile />
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