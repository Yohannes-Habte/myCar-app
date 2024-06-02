import "./FeaturedProducts.css";
import { useContext, useEffect, useState } from "react";
import { clientProducts } from "../../../utils/clientProducts";
import { useParams } from "react-router-dom";
import PageLoader from "../../loader/PageLoader";
import { CartContext } from "../../../context/cart/CartProvider";
import { toast } from "react-toastify";
import { CART_ACTION } from "../../../context/cart/CartReducer";

const FeaturedProductsDetails = () => {
  const { id } = useParams();

  const [featuredCarInfo, setFeaturedCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("car info=", featuredCarInfo);

  const featuredCarDetails = async () => {
    try {
      setLoading(true);
      const data = await clientProducts.getEntry(id);
      setFeaturedCarInfo(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    featuredCarDetails();

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
        payload: { ...featuredCarInfo, quantity },
      });

      toast.success("Item added to cart successfully!");
    }
  };

  return loading ? (
    <PageLoader />
  ) : (
    <section className="px-20">
      <h1> Featured Car Details </h1>
      <figure>
        <img
          className="single-page-car-image"
          src={featuredCarInfo?.fields?.image?.fields?.file?.url}
          alt={featuredCarInfo?.fields?.brand}
        />
      </figure>
      <h3> {featuredCarInfo?.fields?.brand} </h3>
      <button onClick={() => addToCartHandler(id)}>Add To Cart</button>

      <section>
        <p> Model: {featuredCarInfo?.fields?.model} </p>
        <p> Brand: {featuredCarInfo?.fields?.brand} </p>
        <p> Category: {featuredCarInfo?.fields?.catagory} </p>
        <p> color: {featuredCarInfo?.fields?.colour} </p>
        <p> Status: {featuredCarInfo?.fields?.newCar} </p>
        <p> Performance: {featuredCarInfo?.fields?.performance} </p>
        <p> Price: ${featuredCarInfo?.fields?.price} </p>
        <p> Transmission: {featuredCarInfo?.fields?.transmission} </p>
        <p> Year: {featuredCarInfo?.fields?.year} </p>
        <p>
          {" "}
          {
            featuredCarInfo?.fields?.description?.content[0]?.content[0]?.value
          }{" "}
        </p>
      </section>
      <p>Product Information </p>
    </section>
  );
};

export default FeaturedProductsDetails;
