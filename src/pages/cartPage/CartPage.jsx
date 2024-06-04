
import "./CartPage.css";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartProvider";
import "./CartPage.css";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CART_ACTION } from "../../context/cart/CartReducer";

const CartPage = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  // Remove Item from the cart
  const removeItem = (item) => {
    dispatch({
      type: CART_ACTION.REMOVE_ITEM_FROM_CART,
      payload: item,
    });
  };

  // 1. Function to increase or decrease item quantity in the cart
  const updateCart = async (item, quantity) => {
    dispatch({
      type: CART_ACTION.ADD_ITEM_TO_CART,
      payload: { ...item, quantity },
    });
  };

  return (

    <main className="cart-page">
      <Header />

    
    
      <section className=" h-lvh px-20">
        <h1 className="cart-title"> Shopping Cart </h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Cart is empty. <Link to={"/"}> Go to Shopping </Link>
          </p>
        ) : (
          <section className="user-selected-items-in-cart-wrapper">
            {cartItems.map((item) => {
              const {
                fields: { brand, catagory, model, price, image },
                sys: { id },
                quantity,
              } = item;

              return (
                <section key={id} className="user-selected-items-in-cart ">
                  <figure className="cart-item-image-container">
                    <img
                      className="cart-item-image"
                      src={image?.fields?.file.url}
                      alt={brand}
                    />
                  </figure>

                  <aside className="car-brand-model-category-wrapper">
                    <Link to={`/products/${id}`}>
                      <h3> {brand} </h3>
                      <p> {model} </p>
                      <p> {catagory} </p>
                    </Link>
                  </aside>

                  <div className="buttons-quantity-wrapper">
                    <button
                      onClick={() => updateCart(item, item.quantity - 1)}
                      className="btn"
                      disabled={item.quantity < 2}
                    >
                      -
                    </button>
                    <span className="quantity">
                      <strong>{quantity}</strong>
                    </span>
                    <button
                      onClick={() => updateCart(item, item.quantity + 1)}
                      className="btn"
                    >
                      +
                    </button>
                  </div>

                  <div className="price-wrapper">
                    <span> ${price * quantity} </span>
                  </div>

                  <div className="delete-selected-item-wrapper">
                    <FaTrashAlt
                      className="delete-icon"
                      onClick={() => removeItem(item)}
                    />
                  </div>
                </section>
              );
            })}

            <div className="total-items-total-price-and-checkout-btn-wrapper">
              <h3 className="total">
                Total Selected Items are
                <strong className="px-2">
                  {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                </strong>
                and the Total Price for the Items is
                <strong className="px-2">
                  $
                  {cartItems.reduce(
                    (acc, curr) => acc + curr.fields?.price * curr.quantity,
                    0
                  )}
                  .
                </strong>
              </h3>
              <button type="button" className="checkout-btn">
                Checkout
              </button>
            </div>
          </section>
        )}

      </section>
      <Footer />
    </main>
  );
};

export default CartPage;
