import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ProductPage from "./pages/productPage/ProductPage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signupPage/SignUpPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import FeaturedProductPage from "./pages/featuredProductPage/FeaturedProductPage";
import CartPage from "./pages/cartPage/CartPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route
          path="/products/featured/:id"
          element={<FeaturedProductPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
