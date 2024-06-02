import { Link } from "react-router-dom";
import "./BigProductCart.css";
import { FaCartPlus } from "react-icons/fa";

const BigProductCart = ({ data }) => {
  const {
    fields: { brand, catagory, description, model, newCar, price, image },
    sys: { id },
  } = data;

  const carDescription = description.content[0].content[0].value;
  const shortDescription = carDescription.slice(0, 200);
  const shortText = shortDescription.concat("...");

  return (
    <>
      {/* <section className="featured-car-wrapper">
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
      </section> */}
      <section className="bigCard-container">
        <div className="flex flex-col p-4 justify-between">
          <div className="card-content">
            <header className="header-bigCard">{brand}</header>
            <h3 className="font-semibold mb-2">{model}</h3>
            <p className="card-content-para line-clamp-3">{shortText}</p>
          </div>
          <div className="bigCard-content-bottom flex items-center justify-between mt-6">
            <div className="btn-bigCard">
              <Link to={`products/featured/${id}`}>
                <button>Details</button>
              </Link>
            </div>
            <div className="bottom-right">
              <div className="bg-gray-800 py-1 px-4 rounded text-white">
                <p>${price}</p>
              </div>
              <div className="card-icon">
                <FaCartPlus />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={image.fields.file.url}
            alt={brand}
            className="photo-card-big"
          />
        </div>
      </section>
      <div className="placeholder-carosolDot"></div>
    </>
  );
};

export default BigProductCart;
