import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";

const JoinAsHR = () => {
  const { createUser } = useContext(AuthContext);

  // State management
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Extract form values
    const name = form.get('name');
    const company = form.get('company');
    const dob = form.get('dob');
    const email = form.get('email');
    const password = form.get('password');
    const companyLogo = form.get('companyLogo');
    const packageType = form.get('package');

    // Validate password
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should contain at least one uppercase character");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password should contain at least one lowercase character");
      return;
    }

    // Call createUser method from AuthContext
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="pt-16">
      <h2 className="text-3xl my-10 text-center font-bold">Join As An HR Manager</h2>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input
            type="date"
            name="dob"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          {/* Toggle show password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <span
              className="absolute top-4 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="text"
            name="companyLogo"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select a Package</span>
          </label>
          <select
            name="package"
            className="select select-bordered"
            required
          >
            <option value="5">Maximum 5 employees - $5</option>
            <option value="8">Maximum 10 employees - $8</option>
            <option value="15">Maximum 20 employees - $15</option>
          </select>
        </div>
        <div>
          {registerError && <p className="text-red-700">{registerError}</p>}
          {success && <p className="text-green-700">{success}</p>}
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
             Sign Up
          </button>
        </div>
      </form>
      <p className="text-center mt-4">
        Already have an account?
        <Link className="text-blue-600 font-bold ml-1" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default JoinAsHR;
