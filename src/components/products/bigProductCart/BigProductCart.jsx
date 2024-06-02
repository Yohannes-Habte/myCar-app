import { Link } from "react-router-dom";
import "./BigProductCart.css";
import { CartContext } from "../../../context/cart/CartProvider";
import { useContext } from "react";
import { CART_ACTION } from "../../../context/cart/CartReducer";
import { toast } from "react-toastify";

const BigProductCart = ({ data }) => {
  const {
    fields: { brand, catagory, description, model, newCar, price, image },
    sys: { id },
  } = data;

  const { cartItems, dispatch } = useContext(CartContext);

  // Add to cart
  const addToCartHandler = async (id) => {
    const existingItem = cartItems.find((item) => item.sys.id === id);

    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    if (existingItem) {
      toast.warning("Item exist in the cart!");
    } else {
      dispatch({
        type: CART_ACTION.ADD_ITEM_TO_CART,
        payload: { ...data, quantity },
      });

      toast.success("Item added to cart successfully!");
    }
  };

  const carDescription = description.content[0].content[0].value;
  const shortDescription = carDescription.slice(0, 200);
  const shortText = shortDescription.concat("...");

  return (
    <section className="featured-car-wrapper">
      <Link to={`products/featured/${id}`}>
        <figure className="image-container">
          <img
            className="featured-car-image-for-landing-page"
            src={image.fields.file.url}
            alt={brand}
          />
        </figure>
      </Link>

      <aside className="car-info">
        <Link to={`products/featured/${id}`}>
          <h3> {brand} </h3>
          <p> {shortText} </p>
          <p> {catagory} </p>
          <p> {model} </p>
          <p> {newCar} </p>
          <p> ${price} </p>
        </Link>
        <button onClick={() => addToCartHandler(id)}>Add To Cart</button>
      </aside>
    </section>
  );
};

export default BigProductCart;
