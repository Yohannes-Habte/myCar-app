import axios from "axios";
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";
import "./ContactPage.css";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
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
    const accessToken = import.meta.env.VITE_COMMENT_MGT_ACCESS_TOKEN;
    const environmentId = "master";

    const url = `https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries`;

    const entryData = {
      fields: {
        userName: {
          "en-US": formData.userName,
        },
        email: {
          "en-US": formData.email,
        },
        message: {
          "en-US": formData.message,
        },
      },
    };

    try {
      const { data } = await axios.post(url, entryData, {
        headers: {
          "Content-Type": "application/vnd.contentful.management.v1+json",
          Authorization: `Bearer ${accessToken}`,
          "X-Contentful-Content-Type": "comment",
        },
      });

      console.log("Comment", data);
      localStorage.setItem("comments", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Header />
      <section className="h-lvh px-20">
        <h1> Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="border-2"
            />
          </div>

          <div>
            <label>Email Address </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2"
            />
          </div>

          <div>
            <label htmlFor="message">Text Message </label>
            <textarea
              name="message"
              id="message"
              rows="8"
              cols="50"
              value={formData.message}
              onChange={handleChange}
              className="border-2"
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;

