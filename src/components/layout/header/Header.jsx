import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>logo</div>

      <nav>
        <ul>
          <li> <NavLink to="/" > Home </NavLink> </li>
          <li> <NavLink to="/products" > Products </NavLink> </li>
          <li> <NavLink to="/contact" > Contact </NavLink> </li>
        </ul>

        <ul>
          <li> <Link to={"/login"}> Log In </Link> </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
