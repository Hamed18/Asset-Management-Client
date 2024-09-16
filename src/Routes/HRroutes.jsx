import { Navigate,useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useHR from "../hooks/useHR";

const HRroutes = ({children}) => {
	const {user,loading} = useAuth();
	const [isHR, isHRLoading] = useHR();
	const location = useLocation();

	if (loading || isHRLoading){
		return <progress className="progress w-56"></progress>
	}
	if (user && isHR) {
        return children;
    }

	return (
		<Navigate to="/" state={{ from: location }} replace></Navigate>
	);
};

export default HRroutes;