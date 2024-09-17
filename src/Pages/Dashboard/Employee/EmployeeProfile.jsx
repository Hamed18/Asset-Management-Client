import useAuth from "../../../hooks/useAuth";

const EmployeeProfile = () => {
	const auth = useAuth();
	const {user} = auth;
	return (
		<div className="py-24">
			<h3 className="text-center">Your Name: {user.displayName}</h3>
			<h3 className="text-center">Your Email: {user.email}</h3>
			<div className="flex justify-center items-center mb-4">
			   <img src={user.photoURL} alt="" className="w-[325px] h-[400px]"/>
			</div>
		</div>
	);
};

export default EmployeeProfile;