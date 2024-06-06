import { useEffect, useState } from "react";
import "./HomePage.css";
import ProductCarousel from "../../components/carousel/ProductCarousel";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import GlobalFunction from "../../utils/GlobalFunction";
import BigProductCart from "../../components/products/bigProductCart/BigProductCart";
import FilterForm from "../../components/filterForm/FilterForm";
import PageLoader from "../../components/loader/PageLoader";
import UsedCars from "../../components/products/landingProducts/UsedCars";
import NewCars from "../../components/products/landingProducts/NewCars";
import Services from "../../components/services/Services";
import { clientProducts } from "../../utils/clientProducts";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

// Search car brand
const getBrand = async (brand) => {
  try {
    const getCarsOfBrand = await clientProducts.getEntries({
      content_type: "cars",
      "fields.brand": brand,
    });
    return getCarsOfBrand.items;
  } catch (error) {
    console.error(error.message);
  }
};



const initialState = {
  brand: "",
  power: "",
  year: "",
  color: "",
  price: "",
  fuel: "",
  brands: "",
};

const HomePage = () => {
  const { loading, data, getProducts } = GlobalFunction();
  const { getProducts: getData } = GlobalFunction();

  // Local state variable
  const [filters, setFilters] = useState(initialState);
  const [brands, setBrands] = useState([]);

  console.log("brands=", brands);

  const updateChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Reset state variable
  const reset = () => {
    setFilters({
      brand: "",
      power: "",
      year: "",
      color: "",
      price: "",
      fuel: "",
      brands: "",
    });
  };

  useEffect(() => {
    getProducts("cars", 6, 0);

    return () => {};
  }, []);

  const cardsData = data.map((featuredCar) => (
    <BigProductCart key={featuredCar?.sys.id} data={featuredCar} />
  ));

  return (
    <main className="home-page">
      <Header />

      <section className="container mx-auto">
        <h1 className="headline-text"> We sell your dream car !</h1>

        <FilterForm
          getData={getData}
          data={data}
          filters={filters}
          setFilters={setFilters}
          updateChange={updateChange}
          reset={reset}
          brands={brands}
          setBrands={setBrands}
          getBrand={getBrand}
        
        />

        <div className="filter-result-wrapper">
          {brands &&
        
            brands?.map((car) => {
              const {
                fields: { brand, description, model, price, year, image },
                sys: { id },
              } = car;
              return (
                <section key={id} className="cart-product-container">
                  <Link to={`/products/${id}`}>
                    <figure>
                      <img
                        className="car-image"
                        src={image.fields.file.url}
                        alt={brand}
                      />
                    </figure>
                    <h3 className="header-smallCard"> {brand} </h3>
                    <p className="sub-title-text"> {model} </p>
                    <p> Year: {year.slice(0, 4)} </p>
                    <p>
                      {description.content[0].content[0].value
                        .slice(0, 139)
                        .concat("...")}
                      <span className="text-red-500">read more</span>{" "}
                    </p>
                  </Link>
                  <div className="flex justify-between mt-6">
                    <p className="bg-gray-200 py-1 px-2 rounded">
                      {" "}
                      Price: ${price}{" "}
                    </p>
                    <Link>
                      <div className="card-icon">
                        <FaCartPlus />
                      </div>
                    </Link>
                  </div>
                </section>
              );
            })} 
            
        </div>

        {loading ? (
          <div className="home-page-loader">
            <PageLoader />
          </div>
        ) : (
          <>
            <ProductCarousel data={cardsData} loading={loading} />

            <NewCars />

            <UsedCars />
          </>
        )}
      </section>
      <Services />

      <Footer />
    </main>
  );
};

export default HomePage;
