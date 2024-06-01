import { useEffect } from "react";
import "./AllProducts.css";
import SmallProductCart from "../smallProductCart/SmallProductCart";
import GlobalFunction from "../../../utils/GlobalFunction";

const AllProducts = () => {
  const { loading, data, getProducts } = GlobalFunction();

  // Display data on browser
  useEffect(() => {
    getProducts("cars", 9, 0);

    return () => {};
  }, []);

  return (
    <section>
      <h3>List of Products</h3>
      {loading ? (
        "Loading..."
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

export default AllProducts;
