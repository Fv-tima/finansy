import React from "react";
import plus from "../../assets/images/plus.png";
import back from "../../assets/images/back.png";
import { Link } from "react-router-dom";

export default function BHead({  setOpenModal }) {
  function add() {
    setOpenModal(true);
  }
  return (
    <div>
      <div className="p-5 flex flex-row justify-between items-center">
        <h2 className="text-3xl text-deepBlue font-bold-200">Budget</h2>
        <div className="flex space-x-3">
          <button className="border-solid border-2 border-deepBlue rounded-full px-5 ">
            <Link to="/home">
              <img src={back} />
            </Link>
          </button>
          <button onClick={add} className="bg-deepBlue rounded-full p-4">
            <img src={plus} />
          </button>
        </div>
      </div>
    </div>
  );
}
