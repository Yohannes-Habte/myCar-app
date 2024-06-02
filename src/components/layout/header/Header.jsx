import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartProvider";
import { UserContext } from "../../../context/user/UserProvider";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user } = useContext(UserContext);

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
              <span className="ordered-items text-red-400 font-bold">
                {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
              </span>
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
    </header>
  );
};

export default Header;
