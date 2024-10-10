import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const navItems = (
    <>
      <li className="text-base">
        <Link to="/">Home</Link>
      </li>
      <li className="text-base">
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
      </li>
      <li className="text-base">
        <ScrollLink to="skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
      </li>
      <li className="text-base">
        <ScrollLink to="project" smooth={true} duration={500}>
          Project
        </ScrollLink>
      </li>
      <li className="text-base">
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact
        </ScrollLink>
      </li>
    </>
  );

  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown) {
      dropdown.classList.toggle("open");
    }
  };

  return (
    <div className="navbar h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
          </button>
          <ul
            id="dropdownMenu"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl pb-1">
          Md Eftekharul Alam
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
