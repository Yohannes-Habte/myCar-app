
import React from "react";
import "./LoginPage.css";


const LoginPage = () => {
  return (
    <main>
      <div className="flex w-full h-screen">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold">Welcome to myCar</h1>
          <div className=" bg-blue-900 text-white border-2 rounded-3xl p-10 mt-8">
            <form  action="">
              <div className="mt-8">
                <label htmlFor="">User Name:</label>
                <input className="w-full border-2 border-gray-100 rounded-lg p-2 text-sm" type="text" placeholder="Enter your Name"/>
              </div>
                
              <div className="mt-4">
                <label htmlFor="">Password:</label>
                <input className="w-full border-2 border-gray-100 rounded-lg p-2 text-sm" type="Password" placeholder="Enter your password "/>
              </div>

              <button className="w-full mt-20 border-2 rounded-3xl px-10 py-2 bg-orange-400">Sign In</button>
            </form>
          </div>

          <div className="flex justify-between text-sm mt-2">
              <p className="">Do not have an account? Sign Up </p>
              <button className=""> Forget Password</button>
          </div>
        </div>
      </div>
    </main>
  );
};


export default LoginPage;
