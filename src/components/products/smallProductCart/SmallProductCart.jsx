import { Link } from "react-router-dom";
import "./SmallProductCart.css";
import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartProvider";
import { CART_ACTION } from "../../../context/cart/CartReducer";
import { toast } from "react-toastify";

const SmallProductCart = ({ car }) => {
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
        payload: { ...car, quantity },
      });

      toast.success("Item added to cart successfully!");
    }
  };

  const {
    fields: {
      brand,
      catagory,
      colour,
      description,
      model,
      newCar,
      price,
      year,
      performance,
      transmission,
      image,
    },
    sys: { id },
  } = car;

  const carDescription = description.content[0].content[0].value;
  const shortDescription = carDescription.slice(0, 139);
  const shortText = shortDescription.concat("...");

  return (
    <section className="cart-product-container">
      <Link to={`/products/${id}`}>
        <figure>
          <img className="car-image" src={image.fields.file.url} alt={brand} />
        </figure>
        <h3> {brand} </h3>
        <p> Category {catagory} </p>
        <p> Color: {colour} </p>
        <p> Model: {model} </p>
        <p> Price: ${price} </p>
        <p> Status: {newCar} </p>
        <p> Year: {year.slice(0, 4)} </p>
        <p> Performance: {performance} </p>
        <p> Transmission: {transmission} </p>
        <p>
          {" "}
          {shortText} <strong className="text-red-700">read more</strong>{" "}
        </p>
      </Link>
      <button onClick={() => addToCartHandler(id)}>Add To Cart</button>
    </section>
  );
};

export default SmallProductCart;
