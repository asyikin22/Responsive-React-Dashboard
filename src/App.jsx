import Home from './home-page/Home'
import Users from './users-page/Users'
import Books from './books-page/Books'
import Navbar from './component-navbar/Navbar'
import Menu from './component-menu/Menu'
import Footer from './component-footer/Footer'
import Login from './login-page/Login'
import "./styles/global.scss"
import { 
  createBrowserRouter,
  RouterProvider,
  Outlet, 
 } from 'react-router-dom'

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        }, 
        {
          path:"/users",
          element: <Users />
        }, {
          path:"/books",
          element: <Books />
        },
      ]
    }, 
    {
      path: "/login",
      element: <Login />
    }

  ]);

  return (
   <RouterProvider router={router} />
  )
}

export default App
