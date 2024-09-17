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
import HRhome from "../Pages/Dashboard/HRManager/HRhome";
import HRroutes from "./HRroutes";
import AddEmployee from "../Pages/Dashboard/HRManager/AddEmployee";
import AddAsset from "../Pages/Dashboard/HRManager/AddAsset";
import AssetList from "../Pages/Dashboard/HRManager/AssetList";
import EmployeeList from "../Pages/Dashboard/HRManager/EmployeeList";
import EmployeeProfile from "../Pages/Dashboard/Employee/EmployeeProfile";

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
      },
            // Employee
        {
          path : 'employeeHome',
          element : <EmployeeHome></EmployeeHome>
        },
        {
          path : 'employeeAssets',
          element : <MyAssets></MyAssets>,
          loader: () => fetch('https://asset-management-server-nine.vercel.app/allAssets')
        },
        {
          path : 'employeeTeam',
          element : <MyTeam></MyTeam>,
          loader: () => fetch('https://asset-management-server-nine.vercel.app/users')
        },
        {
          path : 'employeeRequest',
          element : <RequestAsset></RequestAsset>,
          loader: () => fetch('https://asset-management-server-nine.vercel.app/allAssets')
        },
        {
          path : 'employeeProfile',
          element : <EmployeeProfile></EmployeeProfile>
        },

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
          element : <MyAssets></MyAssets>,
          loader: () => fetch('https://asset-management-server-nine.vercel.app/allAssets')
        },
        {
          path : 'employeeTeam',
          element : <MyTeam></MyTeam>,
          loader: () => fetch('https://asset-management-server-nine.vercel.app/users')
        },
        {
          path : 'employeeRequest',
          element : <RequestAsset></RequestAsset>,
          loader: () => fetch('https://asset-management-server-nine.vercel.app/allAssets')

        },
        {
          path : 'employeeProfile',
          element : <EmployeeProfile></EmployeeProfile>
        },
        // HR (admin) only routes
        {
          path : 'HRhome',
          element : <HRroutes><HRhome></HRhome></HRroutes>
        },
        {
          path : 'AddAsset',
          element : <HRroutes><AddAsset></AddAsset></HRroutes>
        },
        {
          path : 'AddEmployee',
          element : <HRroutes><AddEmployee></AddEmployee></HRroutes>
        },
        {
          path : 'assetList',
          element : <HRroutes><AssetList></AssetList></HRroutes>
        },
        {
          path : 'employeeList',
          element : <HRroutes><EmployeeList></EmployeeList></HRroutes>
        }
    ]
  }
]);