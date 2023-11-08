import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import CreateAssignment from "../Layouts/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../Layouts/Assignments/Assignments";
import ViewDetails from "../Layouts/View Details/ViewDetails";
import Submit from "../Layouts/View Details/Submit";
import Update from "../Layouts/Update/Update";
import MySubmit from "../Layouts/mysubmit/MySubmit";
import Allsubmits from "../Layouts/AllSubmits/Allsubmits";

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
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:5000/assignmentcount")
      },
      {
        path: "/makeassignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: "/allsubmits",
        element: <PrivateRoute><Allsubmits></Allsubmits></PrivateRoute>
      },
      {
        path: "/assignments/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/assignments/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/submit/:id",
        element: <PrivateRoute><Submit></Submit></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      {
        path: "/mysubmits",
        element: <PrivateRoute><MySubmit></MySubmit></PrivateRoute>
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