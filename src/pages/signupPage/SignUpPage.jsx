import { useContext, useState } from "react";
import axios from "axios";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import { UserContext } from "../../context/user/UserProvider";
import { USER_ACTION } from "../../context/user/UserReducer";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const { dispatch } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const spaceId = import.meta.env.VITE_SPACE_ID;
    const accessToken = import.meta.env.VITE_MGT_ACCESS_TOKEN;
    const environmentId = "master";

    const url = `https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries`;

    const entryData = {
      fields: {
        firstName: {
          "en-US": formData.firstName,
        },
        lastName: {
          "en-US": formData.lastName,
        },
        email: {
          "en-US": formData.email,
        },
        password: {
          "en-US": formData.password,
        },
      },
    };

    try {
      dispatch({ type: USER_ACTION.SIGN_UP_START });
      const { data } = await axios.post(url, entryData, {
        headers: {
          "Content-Type": "application/vnd.contentful.management.v1+json",
          Authorization: `Bearer ${accessToken}`,
          "X-Contentful-Content-Type": "user",
        },
      });

      dispatch({
        type: USER_ACTION.SIGN_UP_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_ACTION.SIGN_UP_FAIL,
        payload: toast.error(error.response.data.message),
      });
    }
  };

  return (

    <main className="flex justify-center align-middle">
     <Header />
      <section className="flex flex-col justify-center h-lvh px-100">
        <h1 className="text-2xl pb-4 text-bold text-gray-600 text-center customfont"> Create Account for Free </h1>

        <form onSubmit={handleSubmit} className="customcolor p-10 border-2 rounded-xl text-white">
          <div className="flex flex-col mb-4 text-sm">

            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-2 p-2 rounded-md"
              placeholder="Enter your first name"
            />
          </div>

          <div className="flex flex-col mb-4 text-sm">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-2 p-2 rounded-md "
              placeholder="Enter your last name"
            />
          </div>


          <div className="flex flex-col mb-4 text-sm">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 p-2 rounded-md"
              placeholder="Enter your email id"
            />
          </div>


          <div className="flex flex-col mb-20 text-sm">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 p-2 rounded-md"
              placeholder="Set your password"
            />
          </div>
         
          <button type="submit" className="active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] w-full py-2 rounded-3xl  bg-orange-400 font-bold text-white">Sign Up</button>

          
        </form>
        <p className="have-no-account flex text-sm p-2 active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] hover:cursor-pointer">
            Already have an account?
            <Link className="sign-up active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] text-gray-600 font-bold hover:cursor-pointer underline" to="/login">
              Log In
            </Link>
          </p>
           
      </section>
      <Footer />
    </main>
  );
};

export default SignUpPage;