import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/images/Google.png";
import fb from "../assets/images/Fbk.png";
import apple from "../assets/images/Apple.png";
import { getDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useAuth } from "../context/AuthContext";
import { useCol } from "../context/ColContext";
import { updateProfile } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    signUp,
    currentUser,
    signUpWithGoogle,
    signUpWithFb,
    signUpWithApple,
  } = useAuth();

  const {
    lang,
    setLang,
    excRate,
    setExcRate,
    excCur,
    setExcCur,
    defCur,
    setDefCur,
    country,
    setCountry,
    fullName,
    setFullname,
    email,
    setEmail,
    password,
    setPassword,
    profileCollectionRef,
  } = useCol();

  async function createUserDocFromAuth(currentUser) {
    const userDocRef = doc(db, "users", currentUser?.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      const createdAt = new Date();
      const Lang = lang;
      const Name = fullName;
      const Country = country;
      const Email = email;
      const DefCur = defCur;
      const ExcCur = excCur;
      const ExcRate = excRate;
      const Password = password;

      try {
        await setDoc(userDocRef, {
          Lang,
          Name,
          Country,
          Email,
          DefCur,
          ExcCur,
          ExcRate,
          Password,
          createdAt,
        });
      } catch (error) {
        console.log(error);
      }
    }
    return userDocRef;
  }

  async function register(e) {
    e.preventDefault();
    try {
      const { response } = await signUp(email, password);
      console.log(currentUser?.uid);
      const userDocRef = await createUserDocFromAuth(response);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  }

  async function registerGoogle() {
    try {
      await signUpWithGoogle();
      navigate("/home");
    } catch (err) {
      console.log(err.messsage);
    }
  }

  async function registerFb() {
    try {
      await signUpWithFb();
      navigate("/home");
    } catch (err) {
      console.log(err.messsage);
    }
  }

  async function registerApple() {
    try {
      await signUpWithApple();
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="p-10 text-deepBlue">
      <h1 className="text-5xl font-bold-300 mb-6">Sign Up</h1>
      <div className="flex flex-col">
        <form onSubmit={register}>
          <div className="flex flex-col space-x-10 justify-center items-center md:flex-row">
            <div className="ml-10 flex flex-col w-3/3  text-center space-y-4 md:w-1/3 sm:w-2/3">
              <div className="flex flex-col justify-start p-8  shadow-lg rounded-xl space-y-3">
                <h3 className="text-2xl font-bold">Personal Info</h3>
                <label
                  htmlFor="name"
                  className="text-dBlack font-bold text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
                <label
                  htmlFor="email"
                  className="text-dBlack font-bold text-left"
                >
                  Email
                </label>
                <input
                  type="text"
                  required
                  className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack text-dBlack"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label
                  htmlFor="password"
                  className="text-dBlack font-bold text-left"
                >
                  Password
                </label>
                <input
                  type="text"
                  required
                  className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label
                  htmlFor="countries"
                  className="text-dBlack font-bold text-left"
                >
                  Country
                </label>
                <select
                  id="countries"
                  className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option defaultValue>Choose a country</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Venezuela">Venezuela</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-3/3  text-center space-y-4 md:w-1/3 sm:w-2/3">
              <div className="flex flex-col justify-start p-8  shadow-lg rounded-xl space-y-3">
                <h3 className="text-2xl font-bold text-start">Preferences</h3>
                <label
                  htmlFor="Default currency"
                  className="text-dBlack font-bold text-left"
                >
                  Default Currency
                </label>
                <input
                  type="text"
                  className="rounded-full flex-1 text-dBlack p-2 border-solid border-2 border-dBlack"
                  value="USD"
                  onChange={(e) => {
                    setDefCur(e.target.value);
                  }}
                />
                <label
                  htmlFor="Exchange currency"
                  className="text-dBlack font-bold text-left"
                >
                  Exchange currency
                </label>
                <select
                  id="countries"
                  className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
                  onChange={(e) => {
                    setExcCur(e.target.value);
                  }}
                >
                  <option defaultValue>Choose currency</option>
                  <option value="Cedis">Ghana</option>
                  <option value="Naira">Nigeria</option>
                  <option value="Venesuelan Bolivar">Venezuela</option>
                </select>
                <label
                  htmlFor="Exchange rate"
                  className="text-dBlack font-bold text-left"
                >
                  Exchange Rate
                </label>
                <input
                  type="text"
                  className="rounded-full p-2 text-dBlack flex-1 p-2 border-solid border-2 border-dBlack "
                  onChange={(e) => {
                    setExcRate(e.target.value);
                  }}
                />
                <label
                  htmlFor="language"
                  className="text-dBlack font-bold text-left"
                >
                  Language
                </label>
                <input
                  type="text"
                  className="rounded-full p-2 text-dBlack flex-1 p-2 border-solid border-2 border-dBlack "
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <button
            to="/register"
            className="mt-6 p-3 px-8 pt-2 text-white bg-deepBlue rounded-full baseline hover:bg-lgBlue hover:text-deepBlue mx-auto justify-center"
          >
            SIGN UP
          </button>
        </form>

        <div className="flex flex-col items-center justify-center md:flex-row ">
          <div className="flex flex-col mt-2 items-center space-y-3 md:mt-16 ">
            <p className="font-bold text-dBlack">or Sign Up with</p>
            <div className="flex space-x-3 text-ash mx-auto">
              <div className="flex space-x-2" onClick={registerGoogle}>
                <img src={google} /> <h2>Google</h2>
              </div>

              <div className="flex space-x-2" onClick={registerFb}>
                <img src={fb} /> <h2>Facebook</h2>
              </div>
              <div className="flex space-x-2" onClick={registerApple}>
                <img src={apple} /> <h2>Apple</h2>
              </div>
            </div>
          </div>
          <div className=" mt-4 flex flex-col space-y-4 md:items-end md:ml-12">
            <Link className="text-deepBlue text-start md:mt-2">
              Are you already a user?
            </Link>
            <Link
              to="/login"
              className="p-3 bgwhite text-deepBlue rounded-full text-center hover:text-lgBlue hover:bg-deepBlue border-solid border-2 "
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
