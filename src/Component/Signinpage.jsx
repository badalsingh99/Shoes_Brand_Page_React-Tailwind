import React from "react";
// import "./Signinpage.css";

const Signinpage = () => {
  return (
    <div className="background-container">
      <div>
        <img
          className="logo-c"
          src="./public/images/logo-design-49571.png"

          alt="Logo-c"
        />
      </div>
      <div className="signin-container">
        <div className="form-container">
          <div className="signin-form">
            <h1 className="form-heading">Login to account</h1>
            <p className="form-subheading">
              Enter your email & password to login
            </p>
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@xyz.com"
              required
              className="form-input"
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              className="form-input"
            />
            <div className="form-checkbox">
              <input
                id="remember"
                type="checkbox"
                value=""
                required
                className="form-checkbox-input"
              />
              <label
                htmlFor="remember"
                className="form-checkbox-label"
              >
                Remember password
              </label>
              <div className="form-forgot-password">
                <a href="#" className="form-forgot-password-link">
                  Forgot password?
                </a>
              </div>
            </div>
            <button className="form-submit-button">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
