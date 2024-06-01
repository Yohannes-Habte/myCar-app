import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { loginToContentful } from "../../utils/clientLogin";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await loginToContentful(email, password);
      // Handle successful login
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <main>
       <section className="h-lvh px-20">
        <h1> Welcome to Your Account </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2"
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>

          <p className="have-no-account">
            Do not have an account?
            <Link className="sign-up" to="/sign-up">
              Sign Up
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};


export default LoginPage;
