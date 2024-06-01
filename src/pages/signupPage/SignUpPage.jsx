// import React from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <main>
      <div className="">
        <h3>Create Your Free Account</h3>
        <div className="mt-4">
          <form action="">
            <div>
              <label htmlFor="">User Name</label>
              <input type="text" placeholder="Write Your Full Name"/>
              </div>
              <div>
              <label htmlFor=""> Email</label>
              <input type="email" placeholder="Write Your Email Address"/>
              </div>
              <div>
              <label htmlFor="">Password</label>
              <input type="Password" />
              </div>
              <div>
              <label htmlFor="">Repeat Password</label>
              <input type="password" />
              </div>
          </form>
          <button>Sign Up</button>
        </div>
        
      </div>
    </main>
  );
};

export default SignUpPage;