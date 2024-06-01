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
    <main>
      <section className="h-lvh px-20">
        <h1> Create Account for Free </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-2"
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-2"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2"
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-2"
            />
          </div>
          <button type="submit">Sign Up</button>

          <p className="have-account">
            Already have an account?
            <Link className="login-link" to="/login">
              Log In
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUpPage;