import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCol } from "../context/ColContext";
import google from "../assets/images/Google.png";
import fb from "../assets/images/Fbk.png";
import apple from "../assets/images/Apple.png";

export default function Login() {
 const [error, setError] = useState("")
  const navigate = useNavigate();
  const {
    signin,
    currentUser,
    signUpWithGoogle,
    signUpWithFb,
    signUpWithApple,
  } = useAuth();

  const {
  email, setEmail, password, setPassword
  } = useCol()
  
  
  async function login(e) {
    e.preventDefault();
    try {
      setError("");
      await signin(email, password);
      navigate("/home");
     
    } catch (err) {
      setError(err.message);
    }
  }

  async function logInGoogle() {
    try {
      await signUpWithGoogle();
      navigate("/home");
    } catch (err) {
      console.log(err.messsage);
    }
  }

  async function logInFb() {
    try {
      await signUpWithFb();
      navigate("/home");
    } catch (err) {
      console.log(err.messsage);
    }
  }

  async function logInApple() {
    try {
      await signUpWithApple();
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="p-10 text-deepBlue">
      <h1 className="text-5xl font-bold-300 mb-6">Login</h1>
      <div className="flex flex-col space-x-4 items-center justify-center md:flex-row">
        <div className="flex flex-col w-3/3  text-center space-y-4 md:w-1/3 sm:w-2/3">
          <form action="" onSubmit={login}>
            <div className="flex flex-col justify-start p-8  shadow-lg rounded-xl space-y-3">
              <h3 className="text-2xl font-bold text-center">
                Enter your Info
              </h3>
              <label className="text-dBlack font-bold text-left">Email</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack"
              />
              <label className="text-dBlack font-bold text-left">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack "
              />
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-red">{error}</p>
              <Link className="text-deepBlue text-end sm:text-start">
                Forgot your password?
              </Link>
              <button
                
                className="p-3 px-8 pt-2 text-white bg-deepBlue rounded-full baseline hover:bg-lgBlue hover:text-deepBlue mx-auto"
              >
                LOG IN
              </button>
            </div>
          </form>
          <p className="font-bold text-dBlack">or Log in with</p>

          <div className="flex space-x-3 text-ash mx-auto">
            <div className="flex space-x-2" onClick={logInGoogle}>
              <img src={google} /> <h2>Google</h2>
            </div>

            <div className="flex space-x-2" onClick={logInFb}>
              <img src={fb} /> <h2>Facebook</h2>
            </div>
            <div className="flex space-x-2" onClick={logInApple}>
              <img src={apple} /> <h2>Apple</h2>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center mt-2 md:mt-12 md:pt-32 space-y-4">
          <Link className="text-deepBlue text-start md:mt-12 md:pt-4">
            Are you a new user?
          </Link>
          <Link
            to="/register"
            className="p-3 px-8 pt-2 bgwhite text-deepBlue rounded-full baseline hover:text-lgBlue hover:bg-deepBlue border-solid border-2 "
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
