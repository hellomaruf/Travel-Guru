import { Link, NavLink } from "react-router-dom";

function NavTwo() {
  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-amber-400 font-medium px-4"
            : "text-black font-medium px-4"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-amber-400 font-medium px-4"
            : "text-black font-medium px-4"
        }
        to="/destination"
      >
        Destination
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-amber-400 font-medium px-4"
            : "text-black font-medium px-4"
        }
        to="/blog"
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-amber-400 font-medium px-4"
            : "text-black font-medium px-4"
        }
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto py-6">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <img className="w-32" src="/images/logo.png" alt="" srcset="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-amber-400 hover:bg-amber-300 border-none "
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default NavTwo;
