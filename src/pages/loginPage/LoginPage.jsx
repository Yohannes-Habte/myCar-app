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
    <main className="flex justify-center align-middle">
       <section className="flex flex-col justify-center h-lvh px-100">
        <h1 className="text-3xl pb-4 text-center text-gray-600 text-bold customfont"> Welcome to Your Account </h1>

        <form onSubmit={handleSubmit} className="customcolor p-10 border-2 rounded-xl text-white">
          <div className="flex flex-col mb-4">
            <label className="text-sm">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border-2 p-2 rounded-lg text-sm text-black outline-none"
            />
          </div>
          <div className="flex flex-col mb-20">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border-2 p-2 rounded-lg text-black outline-none text-sm"
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit" className="active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] w-full py-2 rounded-3xl  bg-orange-400 font-bold text-white">Login</button>
          
          
        </form>
        <div className="have-no-account flex justify-between p-2 text-sm">
          
        <p className="active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] hover:cursor-pointer">
            Do not have an account? 
            <Link className="sign-in active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] text-gray-600 font-bold hover:cursor-pointer underline" to="/sign-up">
               Sign Up
            </Link>
          </p>
          <p className="font-bold text-gray-600 underline active:scale[.98] active:duration-75 ease-in-out hover:scale-[1.05] hover:cursor-pointer"><link rel="stylesheet" href="" />Forget Password</p>
          </div>
      </section>
      
    </main>
    
  );
};


export default LoginPage;
