import a from "../../../../src/assets/Images/e.jpg";
import b from "../../../../src/assets/Images/h.jpg";
import c from "../../../../src/assets/Images/c.jpeg";

const Packages = () => {
	return (
	<div className="my-8 text-center">
      {/* Packages Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Package 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={a} alt="Up to 5 Employees" className="w-full h-32 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Up to 5 Employees</h3>
            <p className="text-lg mb-4">$5</p>
            <p className="text-gray-600">Ideal for small teams. Includes basic asset management features.</p>
          </div>
          {/* Package 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={b} alt="Up to 10 Employees" className="w-full h-32 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Up to 10 Employees</h3>
            <p className="text-lg mb-4">$8</p>
            <p className="text-gray-600">Perfect for medium-sized teams. Additional features included.</p>
          </div>
          {/* Package 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={c} alt="Up to 20 Employees" className="w-full h-32 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Up to 20 Employees</h3>
            <p className="text-lg mb-4">$15</p>
            <p className="text-gray-600">Comprehensive package for larger teams. All features included.</p>
          </div>
        </div>
      </section>
    </div>
	);
};

export default Packages;