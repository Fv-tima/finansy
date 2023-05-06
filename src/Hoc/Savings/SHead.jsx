import React from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/images/plus.png";
import back from "../../assets/images/back.png";

export default function SHead() {
 
  return (
    <div>
      <div className="p-5 flex flex-row justify-between items-center">
        <h2 className="text-3xl text-deepBlue font-bold-300">Savings</h2>
        <div className="flex space-x-3">
          <button className="border-solid border-2 border-deepBlue rounded-full px-5 ">
            <Link to="/home">
              <img src={back} />
            </Link>
          </button>
          <button className="bg-deepBlue rounded-full p-4">
            <Link to="/esavings">
              <img src={plus} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
