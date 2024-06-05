import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import "./ContactPage.css";

const ContactPage = () => {
  return (
   
    <main className="flex justify-center align-middle">
      <section className="flex flex-col justify-center h-lvh px-100">
        <h1 className="text-2xl pb-4 text-bold text-gray-600 text-center customfont"> Contact with us</h1>

        <form /*onSubmit={handleSubmit} */ className="customcolor p-10 border-2 rounded-xl text-white">
          <div className="flex flex-col mb-4 text-sm">
            <label>Your Name:</label>
            <input
              type="text"
              name="firstName"
              // value={formData.firstName}
              // onChange={handleChange}
              className="border-2 p-2 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          {/* <div className="flex flex-col mb-4">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              // value={formData.lastName}
              // onChange={handleChange}
              className="border-2 p-2 rounded-md"
              placeholder="Enter your last name"
            />
          </div> */}
          <div className="flex flex-col mb-4 text-sm">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              className="border-2 p-2 rounded-md"
              placeholder="Enter your email id"
            />
          </div>
          <div className="flex flex-col mb-10 text-sm">
            <label>Your Message:</label>
            <textarea
              type="text"
              name="textarea"
              // value={formData.password}
              // onChange={handleChange}
              className="border-2 p-2 rounded-md"
              placeholder="Write your message"
            />
          </div>
          {/* <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-2"
            />
          </div> */}
          <button type="submit" className="active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] w-full py-2 rounded-3xl  bg-orange-400 font-bold text-white">Send</button>

          
        </form>
        {/* <p className="have-no-account flex text-sm p-2 active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] hover:cursor-pointer">
            Already have an account?
            <Link className="sign-up active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] text-gray-600 font-bold hover:cursor-pointer underline" to="/login">
              Log In
            </Link>
          </p> */}
      </section>
    </main>
    
  );
};

export default ContactPage;
