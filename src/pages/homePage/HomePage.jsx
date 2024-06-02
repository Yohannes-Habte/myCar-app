import { useEffect } from "react";
import ProductCarousel from "../../components/carousel/ProductCarousel";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import LandingPageProducts from "../../components/products/landingProducts/LandingPageProducts";
import GlobalFunction from "../../utils/GlobalFunction";
import "./HomePage.css";
import BigProductCart from "../../components/products/bigProductCart/BigProductCart";
import PageLoader from "../../components/loader/PageLoader";

const HomePage = () => {
  const { loading, data, getProducts } = GlobalFunction();

  useEffect(() => {
    getProducts("cars", 10, 0);

    return () => {};
  }, []);

  const cardsData = data.map((featuredCar) => (
    <BigProductCart key={featuredCar?.sys.id} data={featuredCar} />
  ));

  return (
    <main className="home-page">
      <Header />
      <section className="home-page-container px-20">
        <h1> Welcome to myCar</h1>

        {loading ? (
          <div className="home-page-loader">
            <PageLoader />
          </div>
        ) : (
          <>
            <ProductCarousel data={cardsData} loading={loading} />

            <LandingPageProducts />
          </>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
