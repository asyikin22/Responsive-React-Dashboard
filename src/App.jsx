import Home from './home-page/Home'
import Users from './users-page/Users'
import Books from './books-page/Books'
import { 
  createBrowserRouter,
  RouterProvider,
  Route, 
  Link,
 } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "books",
      element: <Books />,
    },
  ]);

  return (
   <RouterProvider router={router} />
  )
}

export default App
