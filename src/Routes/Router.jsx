import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import About from "../Layouts/About/About";
import CreateAssignment from "../Layouts/CreateAssignment/CreateAssignment";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/makeassignment",
          element: <CreateAssignment></CreateAssignment>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ],
    },
  ]);

export default Router;