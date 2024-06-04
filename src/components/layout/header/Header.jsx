import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartProvider";
import { UserContext } from "../../../context/user/UserProvider";
import { FaShoppingCart, FaCar, FaUserCircle } from "react-icons/fa";

const Header = () => {
  
    const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);
  
  
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-orange-400" : "text-white";
  };
  return (
    <header className="header-bg">
      <div className="justify-between px-10 py-4 text-white items-center container mx-auto grid sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/">
          <div className="logo-header flex gap-2 items-center sm:justify-center md:justify-start">
            <FaCar />
            <div className="logo-header">myCar</div>
          </div>
        </Link>
        <nav className="flex space-x-10 sm:justify-center md:justify-end">
          <ul className="flex space-x-5 ">
            <li>
              <NavLink className={navLinkStyles} to="/">
                {" "}
                Home{" "}
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className={navLinkStyles} to="/products">
                {" "}
                Products{" "}
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className={navLinkStyles} to="/contact">
                {" "}
                Contact{" "}
              </NavLink>{" "}
            </li>
          </ul>
          <ul className="flex gap-6 items-center">
            <li>
              <NavLink className={navLinkStyles} to={"/login"}>
                <div className="flex items-center gap-1">
                  <div>
                    <FaUserCircle />
                  </div>
                  <div>User</div>
                </div>
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className={navLinkStyles} to={"/cart"}>
                <div className="cart-container">
                  <FaShoppingCart />
                </div>
                <div className="cart-items">  {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} </div>
              </NavLink>
            </li>

 <li>
            {cartItems && cartItems ? (
              <span> {user.email} </span>
            ) : (
              <Link to={"/login"}> Log In </Link>
            )}
          </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;
