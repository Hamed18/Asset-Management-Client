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
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useHR from "../hooks/useHR";
import useAuth from "../hooks/useAuth";
  
  const Dashboard = () => {
	const auth = useAuth();
	const {user} = auth;
	const [isHR] = useHR();

	if(isHR==='HR'){
		console.log("HR dashboard");
	}

	const {logOut} = useAuth();  // hook
	const navigate = useNavigate();
	const handleSignOut = () => {
		logOut()
		  .then( () => {
			navigate('/');  // after logout redirect to main home
		  }
		  )
		  .catch((error) => console.error("Sign out error: ", error));
	};
	
	return (
	  <div className="flex">
		{/* dashboard side bar */}
		<div className="w-64 min-h-screen bg-orange-400">
		  <ul className="menu p-4">
			{!isHR ? (
			  <>
				{/* HR */}
				<li>
				  <NavLink to="/dashboard/HRhome">
					<FaHome /> HR Dashboard
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
				{/* <li>
				  <NavLink to="/dashboard/employeeHome">
					<FaHome /> Employee Dashboard
				  </NavLink>
				</li> */}
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
				<FaHome />Main Home
			  </NavLink>
			</li>
			<li>
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
			</li>
		  </ul>
		  <br />
		</div>
		{/* dashboard content */}
		<div className="flex-1 p-8">
		  <Outlet />
		</div>
	  </div>
	);
  };
  
  export default Dashboard;
  