import { Link } from "react-router-dom";
import "./SmallProductCart.css";
import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartProvider";
import { CART_ACTION } from "../../../context/cart/CartReducer";

const SmallProductCart = ({ car }) => {

  const {cartItems, dispatch} = useContext(CartContext)

  // Add to cart function from the home page
  const addToCartHandler = async (item) => {
   
    const existingItem = cartItems.find((item) => item._id === product._id);

    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    const { data } = await axios.get(
      `http://localhost:5000/api/products/${item._id}`
    );
   
      dispatch({
        type: CART_ACTION.ADD_ITEM_TO_CART,
        payload: { ...product, quantity },
      });
    

    //navigate('/cart');
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
  const shortText = shortDescription.concat("...")

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
        <p> {shortText} <strong className="text-red-700">read more</strong> </p>
      </Link>
      <button>Add To Cart</button>
    </section>
  );
};

export default SmallProductCart;
