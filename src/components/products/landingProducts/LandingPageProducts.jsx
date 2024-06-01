import "./LandingPageProducts.css";
import GlobalFunction from "../../../utils/GlobalFunction";
import { useEffect } from "react";
import SmallProductCart from "../smallProductCart/SmallProductCart";
import PageLoader from "../../loader/PageLoader";

const LandingPageProducts = () => {
  const { loading, data, getProducts } = GlobalFunction();

  // Display data on browser
  useEffect(() => {
    getProducts("cars", 6, 0);

    return () => {};
  }, []);
  return (
    <section>
      <h3>Cars of this Week </h3>
      {loading ? (
        <div className="small-product-cart-page-loader">
          <PageLoader />
        </div>
      ) : (
        <div className="small-product-cart-wrapper">
          {data &&
            data.length !== 0 &&
            data.map((car) => <SmallProductCart key={car.sys.id} car={car} />)}
        </div>
      )}
    </section>
  );
};

export default LandingPageProducts;
