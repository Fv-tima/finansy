import React from "react";
import logo from "../assets/images/Logo.png";

export default function Logo() {
  return (
    <div className="flex items-center  justify-end m-5 mb-0">
      <img className=" w-1/4 md:w-auto" src={logo} />
      <h2 className="text-2xl font-bold text-deepBlue">Fantasy</h2>
    </div>
  );
}
