import { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { clientProducts } from "../../../utils/clientProducts";
import PageLoader from "../../loader/PageLoader";
import { CartContext } from "../../../context/cart/CartProvider";
import { CART_ACTION } from "../../../context/cart/CartReducer";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();

  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("Car description=", carInfo);

  const singleCarDetails = async () => {
    try {
      setLoading(true);
      const data = await clientProducts.getEntry(id);
      setCarInfo(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  // Display data on browser
  useEffect(() => {
    singleCarDetails();

    return () => {};
  }, []);

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
        payload: { ...carInfo, quantity },
      });

      toast.success("Item added to cart successfully!");
    }
  };

  return loading ? (
    <div>
      <PageLoader />
    </div>
  ) : (
    <section>
      <figure>
        <img
          className="single-page-car-image"
          src={carInfo?.fields?.image?.fields?.file?.url}
          alt={carInfo?.fields?.brand}
        />
      </figure>
      <h3> {carInfo?.fields?.brand} </h3>
      <button onClick={() => addToCartHandler(id)}>Add To Cart</button>

      <section>
        <p> Model: {carInfo?.fields?.model} </p>
        <p> Brand: {carInfo?.fields?.brand} </p>
        <p> Category: {carInfo?.fields?.catagory} </p>
        <p> color: {carInfo?.fields?.colour} </p>
        <p> Status: {carInfo?.fields?.newCar} </p>
        <p> Performance: {carInfo?.fields?.performance} </p>
        <p> Price: ${carInfo?.fields?.price} </p>
        <p> Transmission: {carInfo?.fields?.transmission} </p>
        <p> Year: {carInfo?.fields?.year} </p>
        <p> {carInfo?.fields?.description?.content[0].content[0].value} </p>
      </section>
    </section>
  );
};

export default ProductDetails;
