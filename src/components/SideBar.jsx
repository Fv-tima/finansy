import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/images/logo.png";
import home from "../assets/images/7.svg";
import budget from "../assets/images/1.svg";
import records from "../assets/images/2.svg";
import savings from "../assets/images/3.svg";
import profile from "../assets/images/4.svg";
import glossary from "../assets/images/5.svg";
import Lg from "../assets/images/6.svg";

export default function SideBar() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  async function logOut() {
    await signout();
    navigate("/");
  }
  return (
    <div className="fixed top-0 left-0 h-70 md:w-[12rem] w-20 m-0 flex flex-col bg-White rounded shadow-lg ">
      <div className="text-lgBlack text-xl p-4 space-x-4 ">
        <Link
          to="/"
          className="p-2 flex items-center duration-300 cursor-pointer  text-deepBlue"
        >
          <img className="w-[80px]" src={logo} />
          <h1 className="text-lgBlack text-1.5xl hidden md:block ">Fanasy</h1>
        </Link>
        <Link
          to="/home"
          className="p-2 mt-3 flex flex-col  md:flex-row items-center hover:rounded duration-300 cursor-pointer hover:bg-lgBlue text-deepBlue"
        > 
          <img src={home} />
          <h1 className="text-lgBlack hover:text-deepBlue ml-3 hidden md:block">
            Home
          </h1>
        </Link>
        <Link
          to="/budget"
          className="p-2 mt-3 flex flex-col md:flex-row  items-center hover:rounded duration-300 cursor-pointer hover:bg-lgBlue text-deepBlue"
        >
          <img src={budget} />
          <h1 className="text-lgBlack hover:text-deepBlue ml-3 hidden md:block">
            Budgets
          </h1>
        </Link>
        <Link
          to="/records"
          className="p-2 mt-3 flex flex-col md:flex-row  items-center hover:rounded  duration-300 cursor-pointer hover:bg-lgBlue text-deepBlue"
        >
          <img src={records} />
          <h1 className="text-lgBlack hover:text-deepBlue ml-3 hidden md:block">
            Records
          </h1>
        </Link>
        <Link
          to="/savings"
          className="p-2 mt-3 flex flex-col md:flex-row  items-center hover:rounded  duration-300 cursor-pointer hover:bg-lgBlue text-deepBlue"
        >
          <img src={savings} />
          <h1 className="text-lgBlack hover:text-deepBlue ml-3 hidden md:block">
            Savings
          </h1>
        </Link>
        <Link
          to="/profile"
          className="p-2 mt-3 flex flex-col md:flex-row  items-center hover:rounded duration-300 cursor-pointer hover:bg-lgBlue text-deepBlue"
        >
          <img src={profile} />
          <h1 className="text-lgBlack hover:text-deepBlue ml-3 hidden md:block">
            Profile
          </h1>
        </Link>
        <Link
          to="/glossary"
          className="p-2 mt-3 flex flex-col md:flex-row  items-center hover:rounded  duration-300 cursor-pointer hover:bg-lgBlue text-deepBlue"
        >
          <img src={glossary} />
          <h1 className="text-lgBlack hover:text-deepBlue ml-3 hidden md:block">
            Glossary
          </h1>
        </Link>
        <div onClick={logOut} className="p-2 mt-3 md:mt-16 flex flex-col md:flex-row  items-center cursor-pointer text-deepBlue">
          <img src={Lg} />
          <h1 className="text-lgBlack ml-3 hidden md:block">Log out</h1>
        </div>
      </div>
    </div>
  );
}
