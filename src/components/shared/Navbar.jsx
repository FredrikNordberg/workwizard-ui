import { Link, NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <ul className="menu">
            <li className="logo">
              <Link to="/">Work Wizard</Link>
            </li>
            <li className="toggle">
              <input type="checkbox" className="menu-btn" id="menu-btn" />
              <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
              </label>
            </li>
            <li className="menu-item">
              <NavLink to="/">Start</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/about">Om oss</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/workorders">Arbetsordrar</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
