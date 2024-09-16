import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const JoinAsHR = () => {
  const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //redirect to home page after login
  const location = useLocation();
  console.log('location in the login page', location);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const dob = new Date(form.dob.value);
    const email = form.email.value.trim();
    const password = form.password.value;
    const companyLogo = form.companyLogo.value.trim();
    const packageType = form.package.value;
    
    setRegisterError("");
    setSuccess("");

    // Validate password
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

	// Prepare user data
      const User = {
        name,
        company,
        dob,
        email,
        companyLogo,
        package: packageType,
        role: 'HR'
      };
    console.log(User);

    try {
      // Create user with AuthContext
      await createUser(email, password);

      // POST api. Send user data to the database
      const response = await fetch('http://localhost:4000/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(User),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success in post user data', data);

      // Auth redirect after login with password
      navigate(from, { replace: true });

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Sign Up as an HR Successful",
          icon: "success",
          confirmButtonText: 'OK',
        });
        setSuccess("User Created Successfully");
      }

    } catch (error) {
      console.error('Error:', error);
      setRegisterError(error.message);
    }
  };

  return (
    <div className="pt-16">
      <h2 className="text-3xl my-10 text-center font-bold">Join As An HR Manager</h2>
      <form onSubmit={handleSignUp} className="md:w-3/4 lg:w-1/2 mx-auto">
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
