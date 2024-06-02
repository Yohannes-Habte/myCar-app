import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { clientProducts } from "../../../utils/clientProducts";
import PageLoader from "../../loader/PageLoader";
import { FaCartPlus } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const [carInfo, setCarInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const singleCarDetails = async () => {
    try {
      setLoading(true);
      const data = await clientProducts.getEntry(id);
      setCarInfo(data);
      console.log(data);

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

  // try mb

  return loading ? (
    <div>
      <PageLoader />
    </div>
  ) : (
    <section className="singleCar-details-container">
      <figure>
        <img
          className="single-page-car-image"
          src={carInfo?.fields?.image?.fields?.file?.url}
          alt={carInfo?.fields?.brand}
        />
      </figure>
      <div className="header-container flex items-center justify-between mt-6 bg-orange-100 px-1 py-2 rounded">
        <div>
          <h3 className="header-singleproduct-detail">
            {" "}
            {carInfo?.fields?.brand}{" "}
          </h3>
        </div>
        <div className="flex gap-2">
          <div>
            <p className="bg-gray-200 py-2 px-2 rounded font-bold">
              {" "}
              Price: ${carInfo?.fields?.price}{" "}
            </p>
          </div>
          <div className="card-icon flex  items-center gap-1 rounded">
            <button className="text-sm"> Add To Cart </button>
            <FaCartPlus />
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mt-6 px-2">Description</h3>
        <p className="my-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde
          nisi recusandae temporibus fuga quae cum possimus nulla aliquam,
          cumque molestiae id libero! Debitis dicta repudiandae quasi quisquam
          odit sed?
        </p>
      </div>
      <h3 className="font-semibold mt-6 px-2">Specificattion:</h3>

      <section className="bg-gray-100 px-1 py-2 rounded grid gap-2 grid-cols-2 mb-60">
        <div>
          <p className="bg-gray-200 py-2 px-1">
            {" "}
            Model: {carInfo?.fields?.model}{" "}
          </p>
          <p className="bg-gray-300 py-2 px-1">
            {" "}
            Brand: {carInfo?.fields?.brand}{" "}
          </p>
          <p className="bg-gray-200 py-2 px-1">
            {" "}
            Category: {carInfo?.fields?.catagory}{" "}
          </p>
          <p className="bg-gray-300 py-2 px-1">
            {" "}
            color: {carInfo?.fields?.colour}{" "}
          </p>
        </div>
        <div>
          <p className="bg-gray-200 py-2 px-1">
            {" "}
            Status: {carInfo?.fields?.newCar}{" "}
          </p>
          <p className="bg-gray-300 py-2 px-1">
            {" "}
            Performance: {carInfo?.fields?.performance}{" "}
          </p>
          <p className="bg-gray-200 py-2 px-1">
            {" "}
            Transmission: {carInfo?.fields?.transmission}{" "}
          </p>
          <p className="bg-gray-300 py-2 px-1">
            {" "}
            Year: {carInfo?.fields?.year}{" "}
          </p>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
