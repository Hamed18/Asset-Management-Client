import {
	FaHome,
	FaList,
	FaUtensils,
	FaBook,
	FaUsers,
	FaCalendar,
	FaShoppingCart,
	FaAd,
  } from "react-icons/fa";
  import { NavLink, Outlet } from "react-router-dom";
  import useHR from "../hooks/useHR";
  
  const Dashboard = () => {
	const [isHR] = useHR();
	return (
	  <div className="flex">
		{/* dashboard side bar */}
		<div className="w-64 min-h-screen bg-orange-400">
		  <ul className="menu p-4">
			{isHR ? (
			  <>
				{/* HR */}
				<li>
				  <NavLink to="/dashboard/HRhome">
					<FaHome /> Home
				  </NavLink>
				</li>
				<li>
				  <NavLink to="/dashboard/AddAsset">
					<FaUtensils /> Add Asset
				  </NavLink>
				</li>
				<li>
				  <NavLink to="/dashboard/AddEmployee">
					<FaList /> Add Employee
				  </NavLink>
				</li>
				<li>
				  <NavLink to="/dashboard/assetList">
					<FaBook /> Asset List
				  </NavLink>
				</li>
				<li>
				  <NavLink to="/dashboard/employeeList">
					<FaUsers /> Employee List
				  </NavLink>
				</li>
			  </>
			) : (
			  <>
				<li>
				  <NavLink to="/dashboard/employeeHome">
					<FaHome /> Home
				  </NavLink>
				</li>
				<li>
				  <NavLink to="/dashboard/employeeAssets">
					<FaCalendar /> My Assets
				  </NavLink>
				</li>
				<li>
				  <NavLink to="/dashboard/employeeTeam">
					<FaShoppingCart /> My Team
				  </NavLink>
				</li>
				<li>
				  <NavLink to="/dashboard/employeeRequest">
					<FaAd /> Request for Asset
				  </NavLink>
				</li>
			  </>
			)}
			{/* shared nav links */}
			<div className="divider"></div>
			<li>
			  <NavLink to="/">
				<FaHome /> Home
			  </NavLink>
			</li>
		  </ul>
		</div>
		{/* dashboard content */}
		<div className="flex-1 p-8">
		  <Outlet />
		</div>
	  </div>
	);
  };
  
  export default Dashboard;
  