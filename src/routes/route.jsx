import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../components/Users";
import Update from "../components/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>
    },
    {
        path:"/users",
        element:<Users></Users>,
        loader:()=> fetch('http://localhost:5000/users')
    },
    {
      path:'/update/:id',
      element:<Update></Update>,
      loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
    }
  ]);
export default router