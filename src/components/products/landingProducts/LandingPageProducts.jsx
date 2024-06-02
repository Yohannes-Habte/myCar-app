import "./LandingPageProducts.css";
import GlobalFunction from "../../../utils/GlobalFunction";
import { useEffect } from "react";
import SmallProductCart from "../smallProductCart/SmallProductCart";
import PageLoader from "../../loader/PageLoader";

const LandingPageProducts = () => {
  const { loading, data, getProducts } = GlobalFunction();

  // Display data on browser
  useEffect(() => {
    getProducts("cars", 3, 0);

    return () => {};
  }, []);
  return (
    <>
      <section>
        <div className="flex justify-between mb-3 mt-36">
          <h4 className="new-car-text">New luxury car</h4>
          <h4 className="show-more-text">Show more</h4>
        </div>{" "}
        {loading ? (
          <div className="small-product-cart-page-loader">
            <PageLoader />
          </div>
        ) : (
          <div className="small-product-cart-wrapper">
            {data &&
              data.length !== 0 &&
              data.map((car) => (
                <SmallProductCart key={car.sys.id} car={car} />
              ))}
          </div>
        )}
      </section>
      <section>
        <div className="flex justify-between mb-3 mt-36">
          <h4 className="new-car-text">Used car</h4>
          <h4 className="show-more-text">Show more</h4>
        </div>{" "}
        {loading ? (
          <div className="small-product-cart-page-loader">
            <PageLoader />
          </div>
        ) : (
          <div className="small-product-cart-wrapper">
            {data &&
              data.length !== 0 &&
              data.map((car) => (
                <SmallProductCart key={car.sys.id} car={car} />
              ))}
          </div>
        )}
      </section>
    </>
  );
};

export default LandingPageProducts;
