import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between px-10 py-3 bg-neutral-900 text-white">
      <div>logo</div>

      <nav className="flex space-x-10 items-center">
        <ul className="flex space-x-5 ">
          <li>
            <NavLink to="/"> Home </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/products"> Products </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact"> Contact </NavLink>{" "}
          </li>
        </ul>

        <ul className="flex space-x-5 items-center ">
          <li className="cart-item">
            <NavLink to={"/cart"}>
              <FaShoppingCart />
              <span className="ordered-items">0</span>
            </NavLink>
          </li>
          <li>
            <Link to={"/login"}> Log In </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
