import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main>
      <Header />
      <section className="h-lvh">
        <h1> Welcome to myCar</h1>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
