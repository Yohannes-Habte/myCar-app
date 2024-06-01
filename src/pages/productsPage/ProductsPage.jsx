import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import AllProducts from "../../components/products/allProduct/AllProducts";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <main>
      <Header />
      <section className="px-20">
        <h1> All Our Products </h1>

        <AllProducts />
      </section>

      <Footer />
    </main>
  );
};

export default ProductsPage;
