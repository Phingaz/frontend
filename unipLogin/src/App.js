import Home, { startServer } from "./pages/Home"
import Login from "./pages/Login"
import RegisterUser from './pages/RegisterUser'
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home />, loader: startServer, },
    { path: "/login", element: <Login /> },
    { path: "register", element: <RegisterUser /> },
    { path: "*", element: <ErrorPage /> },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
