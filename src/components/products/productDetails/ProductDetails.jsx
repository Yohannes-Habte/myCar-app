import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { clientProducts } from "../../../utils/clientProducts";
import PageLoader from "../../loader/PageLoader";

const ProductDetails = () => {
  const { id } = useParams();

  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <button> Add To Cart </button>

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
      </section>
    </section>
  );
};

export default ProductDetails;
