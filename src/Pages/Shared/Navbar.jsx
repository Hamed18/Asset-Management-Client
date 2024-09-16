import { useContext, useEffect, useState } from "react";
import logo from "../../../src/assets/logo.png";
import userdefaultPic from "../../../src/assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Initialize as an empty object
  const [userData, setUser] = useState({});
  
  useEffect(() => {
    if (user && user.email) {
      const url = `http://localhost:4000/users/${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => console.error("Error fetching user data: ", error));
    }
  }, [user]);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((error) => console.error("Sign out error: ", error));
  };

  const navLinks = (
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
          <img src={logo} alt="WorkKit Logo" className="w-8 h-8 mr-2" />
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
