import { useState } from "react";
import axios from "axios";
import "./SignUpPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
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
        phone: {
          "en-US": formData.phone,
        },
      },
    };

    try {
      const response = await axios.post(url, entryData, {
        headers: {
          "Content-Type": "application/vnd.contentful.management.v1+json",
          Authorization: `Bearer ${accessToken}`,
          "X-Contentful-Content-Type": "user",
        },
      });

      console.log("Entry created successfully:", response.data);
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (
    <main className="flex justify-center align-middle">
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
          <button type="submit" className="active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] w-full py-2 rounded-3xl  bg-orange-400 font-bold text-white">Sign Up</button>

          
        </form>
        <p className="have-no-account flex text-sm p-2 active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] hover:cursor-pointer">
            Already have an account?
            <Link className="sign-up active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] text-gray-600 font-bold hover:cursor-pointer underline" to="/login">
              Log In
            </Link>
          </p>
      </section>
    </main>
  );
};

export default SignUpPage;