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
    <main>
      <Header />

      <h1 className="header-text"> Your Cart </h1>
      <section className=" cart-main-section-container">
        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Cart is empty. <Link to={"/"}> Go to Shopping </Link>
          </p>
        ) : (
          <section>
            <div className="ordered-items flex gap-3 justify-between">
              <div className="items-container">
                {cartItems.map((item) => {
                  const {
                    fields: { brand, catagory, model, price, image },
                    sys: { id },
                    quantity,
                  } = item;
                  return (
                    <section
                      key={id}
                      className="flex items-center gap-3 item-container "
                    >
                      <div className="flex gap-3 ">
                        <figure className="cart-item-image-container">
                          <img
                            className="cart-item-image"
                            src={image?.fields?.file.url}
                            alt={brand}
                          />
                        </figure>
                        <div className="flex flex-col justify-between">
                          <div className="flex gap-3 justify-between">
                            <aside>
                              <Link to={`/products/${id}`}>
                                <h3 className="font-bold text-lg"> {brand} </h3>
                                <p> {model} </p>
                                <p> {catagory} </p>
                              </Link>
                            </aside>
                            <div className="delete-btn">
                              <FaTrashAlt onClick={() => removeItem(item)} />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="buttons-quantity-wrapper">
                              <div className="py-1 px-3 bg-gray-400 font-bold text-white rounded">
                                <button
                                  onClick={() =>
                                    updateCart(item, item.quantity - 1)
                                  }
                                  disabled={item.quantity < 2}
                                >
                                  -
                                </button>
                              </div>
                              <span className="quantity">
                                <strong>{quantity}</strong>
                              </span>
                              <div className="py-1 px-2 bg-gray-400 font-bold text-white rounded">
                                <button
                                  onClick={() =>
                                    updateCart(item, item.quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="price-wrapper bg-gray-600 py-1 px-4 ml-20 rounded font-semibold text-white">
                              <span> ${price * quantity} </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="bg-gray-500 text-white price-comtainer flex flex-col justify-between">
                <div>
                  <div>
                    <h3 className="p-2">Total Items: </h3>
                    <p className="bg-orange-300 mx-2 text-black px-1 py-1">
                      {" "}
                      {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                    </p>
                  </div>
                  <div>
                    <h3 className="p-2">Total Price:</h3>
                    <p className="bg-orange-300 mx-2 text-black px-1 py-1">
                      $
                      {cartItems.reduce(
                        (acc, curr) => acc + curr.fields?.price * curr.quantity,
                        0
                      )}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="checkout-btn bg-rose-500 py-2 px-3 font-bold hover:bg-rose-600"
                >
                  Checkout
                </button>
              </div>

            </div>
          </section>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default CartPage;
