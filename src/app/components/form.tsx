'use client'
import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Login form submission handler with event typing
  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Logging in with:", { email, password, rememberMe });
  };

  // Register form submission handler with event typing
  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Registering with email:", email);
  };

  // Handle changes in email input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Update email state
  };

  // Handle changes in password input
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // Update password state
  };

  return (
    <div className="w-full h-auto py-10 px-4 lg:px-16 flex flex-col lg:flex-row justify-center items-center">
      {/* Login Section */}
      <section className="w-full max-w-lg h-auto lg:h-[630px] mb-8 lg:mb-0">
        <h2 className="text-4xl font-Poppins font-semibold mt-4 mb-8">Log in</h2>
        <form onSubmit={handleSubmitLogin} className="space-y-6">
          {/* Email */}
          <div className="w-full h-[121px] rounded-[10px] border-[#9F9F9F]">
            <label htmlFor="email" className="font-Poppins font-medium text-base">
              Username or email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange} // Handle email change
              className="w-full h-[75px] rounded-[10px] border my-4 p-4"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="font-Poppins font-medium text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange} // Handle password change
              className="w-full h-[75px] rounded-[10px] border my-4 p-4"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)} // Toggle remember me state
              className="w-5 h-5"
            />
            <label htmlFor="rememberMe" className="font-Poppins font-normal text-base">
              Remember me
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <button type="submit" className="w-full lg:w-[215px] h-16 rounded-[15px] border text-black">
              Log in
            </button>
            <p className="font-Poppins font-light text-base text-center lg:text-left mt-4 lg:mt-0">
              Lost Your Password?
            </p>
          </div>
        </form>
      </section>

      {/* Register Section */}
      <div className="w-full max-w-lg h-auto ml-14 lg:h-[630px]">
        <h2 className="text-4xl font-Poppins font-semibold mt-4 mb-8">Register</h2>

        {/* Email */}
        <form onSubmit={handleSubmitRegister}>
          <label htmlFor="emailRegister" className="font-Poppins font-medium text-base">
            Email address
          </label>
          <input
            type="email"
            id="emailRegister"
            value={email}
            onChange={handleEmailChange} // Handle email change
            className="w-full h-[75px] rounded-[10px] border my-4 p-4"
            placeholder="Enter your email"
            required
          />

          <p className="font-Poppins font-light text-base text-black mb-6">
            A link to set a new password will be sent to your email address.
          </p>

          <p className="font-Poppins font-light text-base mb-6">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
          </p>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full lg:w-[215px] h-16 rounded-[15px] border  text-black"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
