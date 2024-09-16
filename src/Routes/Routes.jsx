import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
import Login from "../Pages/Authentication/Login";
import ErrorPage from "../Route/ErrorPage";

import PrivateRoutes from "../Route/PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import EmployeeHome from "../Pages/Dashboard/Employee/EmployeeHome";
import MyAssets from "../Pages/Dashboard/Employee/MyAssets";
import MyTeam from "../Pages/Dashboard/Employee/MyTeam";
import RequestAsset from "../Pages/Dashboard/Employee/RequestAsset";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      },
      {
          path: '/joinAsEmployee',
          element: <JoinAsEmployee></JoinAsEmployee>
      },
      {
          path: '/joinAsHR',
          element: <JoinAsHR></JoinAsHR>
      },
      {
          path: '/login',
          element: <Login></Login>
      }
    ]
  },
  {
    path : 'dashboard',
    element : <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children : [
      // Employee
        {
          path : 'employeeHome',
          element : <EmployeeHome></EmployeeHome>
        },
        {
          path : 'employeeAssets',
          element : <MyAssets></MyAssets>
        },
        {
          path : 'employeeTeam',
          element : <MyTeam></MyTeam>
        },
        {
          path : 'employeeRequest',
          element : <RequestAsset></RequestAsset>
        },
    ]
  }
]);


// import {
//   createBrowserRouter,
// } from "react-router-dom";
// import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home/Home";
// import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
// import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
// import Login from "../Pages/Authentication/Login";
// import Register from "../Pages/Authentication/Register";
// import ErrorPage from "../Route/ErrorPage";
// import MyAssets from "../Pages/Employee/MyAssets";
// import MyTeam from "../Pages/Employee/MyTeam";
// import RequestAsset from "../Pages/Employee/RequestAsset";
// import Profile from "../Pages/Shared/Profile";
// import AssetList from "../Pages/HRManager/AssetList";
// import AddAsset from "../Pages/HRManager/AddAsset";
// import AllRequests from "../Pages/HRManager/AllRequests";
// import EmployeeList from "../Pages/HRManager/EmployeeList";
// import AddEmployee from "../Pages/HRManager/AddEmployee";
// import PrivateRoute from "../Route/PrivateRoutes"; // Protects routes for authenticated users

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     errorElement: <ErrorPage></ErrorPage>,
//     children: [
//       // Without Login Routes (public)
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/joinAsEmployee',
//         element: <JoinAsEmployee></JoinAsEmployee>
//       },
//       {
//         path: '/joinAsHR',
//         element: <JoinAsHR></JoinAsHR>
//       },
//       {
//         path: '/login',
//         element: <Login></Login>
//       },
//       {
//         path: '/register',
//         element: <Register></Register>
//       },

//       // Employee Routes (private)
//       {
//         path: '/myAssets',
//         element: <PrivateRoute><MyAssets /></PrivateRoute>,
//         roles: ['employee'], // Ensure this route is only accessible to employees
//       },
//       {
//         path: '/myTeam',
//         element: <PrivateRoute><MyTeam /></PrivateRoute>,
//         roles: ['employee'],
//       },
//       {
//         path: '/requestAsset',
//         element: <PrivateRoute><RequestAsset /></PrivateRoute>,
//         roles: ['employee'],
//       },
//       {
//         path: '/profile',
//         element: <PrivateRoute><Profile /></PrivateRoute>, // Shared Profile for all users
//       },

//       // HR Manager Routes (private)
//       {
//         path: '/assetList',
//         element: <PrivateRoute><AssetList /></PrivateRoute>,
//         roles: ['hrManager'], // Restrict to HR Managers
//       },
//       {
//         path: '/addAsset',
//         element: <PrivateRoute><AddAsset /></PrivateRoute>,
//         roles: ['hrManager'],
//       },
//       {
//         path: '/allRequests',
//         element: <PrivateRoute><AllRequests /></PrivateRoute>,
//         roles: ['hrManager'],
//       },
//       {
//         path: '/employeeList',
//         element: <PrivateRoute><EmployeeList /></PrivateRoute>,
//         roles: ['hrManager'],
//       },
//       {
//         path: '/addEmployee',
//         element: <PrivateRoute><AddEmployee /></PrivateRoute>,
//         roles: ['hrManager'],
//       },
//     ]
//   }
// ]);

// export default router;


