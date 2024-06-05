import { useEffect } from "react";
import "./HomePage.css";
import ProductCarousel from "../../components/carousel/ProductCarousel";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import LandingPageProducts from "../../components/products/landingProducts/LandingPageProducts";
import GlobalFunction from "../../utils/GlobalFunction";
import BigProductCart from "../../components/products/bigProductCart/BigProductCart";
import FilterForm from "../../components/filterForm/FilterForm";
import PageLoader from "../../components/loader/PageLoader";
import Services from "../../components/services/Services";

const HomePage = () => {
  const { loading, data, getProducts } = GlobalFunction();

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

        <FilterForm />

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
      <Services />

      <Footer />
    </main>
  );
};

export default HomePage;
