import "./FeaturedProducts.css";
import { useEffect, useState } from "react";
import { clientProducts } from "../../../utils/clientProducts";
import { useParams } from "react-router-dom";
import PageLoader from "../../loader/PageLoader";

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

  return loading ? (
    <PageLoader />
  ) : (
    <section className="h-lvh px-20">
      <h1> Featured Car Details </h1>
      <figure>
        <img
          className="single-page-car-image"
          src={featuredCarInfo?.fields?.image?.fields?.file?.url}
          alt={featuredCarInfo?.fields?.brand}
        />
      </figure>
      <h3> {featuredCarInfo?.fields?.brand} </h3>

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
      </section>
      <p>Product Information </p>
    </section>
  );
};

export default FeaturedProductsDetails;
