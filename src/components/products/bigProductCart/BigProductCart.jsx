import { Link } from "react-router-dom";
import "./BigProductCart.css";

const BigProductCart = ({ data }) => {
  const {
    fields: { brand, catagory, description, model, newCar, price, image },
    sys: { id },
  } = data;

  const carDescription = description.content[0].content[0].value;
  const shortDescription = carDescription.slice(0, 200);
  const shortText = shortDescription.concat("...");

  return (
    <section className="featured-car-wrapper">
      <Link to={`products/featured/${id}`}>
        <figure className="image-container">
          <img
            className="featured-car-image-for-landing-page"
            src={image.fields.file.url}
            alt={brand}
          />
        </figure>
      </Link>

      <aside className="car-info">
        <Link to={`products/featured/${id}`}>
          <h3> {brand} </h3>
          <p> {shortText} </p>
          <p> {catagory} </p>
          <p> {model} </p>
          <p> {newCar} </p>
          <p> ${price} </p>
        </Link>
        <button>Add To Cart</button>
      </aside>
    </section>
  );
};

export default BigProductCart;
