import { useContext, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { loginToContentful } from "../../utils/clientLogin";
import { UserContext } from "../../context/user/UserProvider";
import { USER_ACTION } from "../../context/user/UserReducer";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      dispatch({ type: USER_ACTION.LOGIN_START });
      
      await loginToContentful(email, password);

      dispatch({
        type: USER_ACTION.LOGIN_SUCCESS,
        payload: { email, password },
      });

      localStorage.setItem("userInfo", JSON.stringify({ email, password }));
    } catch (err) {
      setError("Invalid credentials");
      dispatch({
        type: USER_ACTION.LOGIN_FAIL,
        payload: toast.error(err.message),
      });
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
