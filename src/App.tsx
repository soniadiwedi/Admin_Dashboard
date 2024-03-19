import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Users from "./pages/users/Users";
import Layout from "./components/layout/Layout";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/product",
          element:<Products/>
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>

    }
  ]);
  return (
    <RouterProvider  router={router}/>
  )
}

export default App
