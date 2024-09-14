import Banner from "../../Shared/Banner";
import AboutUs from "./AboutUs";
import Packages from "./Packages";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<AboutUs></AboutUs>
			<Packages></Packages>
			{/* <Testimonials></Testimonials> */}
		</div>
	);
};

export default Home;