import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="">
			  <Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;