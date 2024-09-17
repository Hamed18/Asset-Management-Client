import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import logoXYZ from "../../../src/assets/logo.png"; // Default logo for service provider
import userdefaultPic from "../../../src/assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHR, setHR] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(logoXYZ); // Default logo

  useEffect(() => {
    if (user && user.email) {
      const url = `http://localhost:4000/users/${user.email}`;
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('Query by email successful', data);
          if (data) {
            if (data.role === 'HR') {
              setHR(true);
              setCompanyLogo(data.companyLogo || logoXYZ); // Set company logo for HR
            } else if (data.role === 'Employee') {
              setHR(false);
              setCompanyLogo(data.companyLogo || logoXYZ); // Set company logo for Employee
            } else {
              setHR(false);
              setCompanyLogo(logoXYZ); // Default logo if no affiliation
            }
          }
        })
        .catch((error) => console.error("Error fetching user data: ", error));
    }
  }, [user]);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.error("Sign out error: ", error));
  };

  const navLinks = user ? (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isHR ? (
        <>
          <li><NavLink to="/dashboard/HRhome">Home</NavLink></li>
          <li><NavLink to="/dashboard/assetList">Asset List</NavLink></li>
          <li><NavLink to="/dashboard/addAsset">Add an Asset</NavLink></li>
          <li><NavLink to="/dashboard/allRequests">All Requests</NavLink></li>
          <li><NavLink to="/dashboard/myEmployeeList">My Employee List</NavLink></li>
          <li><NavLink to="/dashboard/addEmployee">Add an Employee</NavLink></li>
          <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
        </>
      ) : (
        <>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/employeeAssets">My Request</NavLink></li>
          <li><NavLink to="/employeeTeam">My Team</NavLink></li>
          <li><NavLink to="/employeeRequest">Request for an Asset</NavLink></li>
          <li><NavLink to="/employeeProfile">Profile</NavLink></li>
        </>
      )}
      <li>
        <button onClick={handleSignOut} className="btn btn-primary">
          Sign Out
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/joinAsEmployee">Join as Employee</NavLink>
      </li>
      <li>
        <NavLink to="/joinAsHR">Join as HR Manager</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="flex items-center btn btn-ghost text-2xl font-bold">
          <img src={companyLogo} alt="Company Logo" className="w-8 h-8 mr-2" />
          <span className="text-green-300">Work</span>
          <span className="text-green-600 font-bold">Kit</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div
              className="w-10 rounded-full md:tooltip md:tooltip-left"
              data-tip={user.displayName}
            >
              <img
                alt="User Profile"
                src={user.photoURL || userdefaultPic}
                className="rounded-full w-10 h-10"
              />
            </div>
            <button onClick={handleSignOut} className="btn btn-primary ml-4">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
