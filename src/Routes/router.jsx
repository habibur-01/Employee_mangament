import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/ContactUs/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import Users from "../Pages/Dashbord/Users/Users";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import EmployeList from "../Pages/Dashbord/EmployeList/EmployeList";
import Progress from "../Pages/Dashbord/Progress/Progress";
import WorkSheet from "../Pages/Dashbord/WorkSheet/WorkSheet";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element: <Registration></Registration>
        }

      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: '/dashboard/users',
          element: <Users></Users>
        },
        {
          path: '/dashboard/employeeList',
          element: <EmployeList></EmployeList>
        },
        {
          path: '/dashboard/progress',
          element: <Progress></Progress>
        },
        {
          path: '/dashboard/worksheet',
          element: <WorkSheet></WorkSheet>
        }
      ]
    },
  ]);
  export default router;