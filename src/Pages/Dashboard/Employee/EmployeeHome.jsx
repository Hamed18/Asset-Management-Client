import { Link } from "react-router-dom";
import MyAssets from "./MyAssets";
import RequestAsset from "./RequestAsset";

const EmployeeHome = () => {
	return (
		<div>
			<h3>Employee Home Dashboard</h3>
			<h3 className="text-center my-8">Hi! Welcome Back!</h3>
			<Link to='dashboard/employeeAssets'>Requested Asset</Link>
			<h3 className="text-center my-8">My Team</h3>
			<Link to='dashboard/employeeTeam'>My Team</Link>
		</div>
	);
};

export default EmployeeHome;