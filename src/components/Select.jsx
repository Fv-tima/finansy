import React from "react";
import edit from "../assets/images/Edit.png";
import cancel from "../assets/images/4.png";
import { Link } from "react-router-dom";

export default function Select({ openModal, setOpenModal }) {
  function add() {
    setOpenModal(false);
  }
  return (
    <div
      className=" bg-white flex flex-col space-y-8 items-center
      top-[40%] left-[30%]
  md:left-[40%] fixed rounded-lg z-[1000] shadow-lg p-14 pt-10"
    >
      <button
        onClick={add}
        className=" border-solid border-1 border-deepBlue p-3 rounded-full ml-[10rem]"
      >
        <img src={cancel} />
      </button>

      <h2 className="text-1xl font-bold text-dBlack">Select section</h2>
      <div className="flex space-x-8">
        <Link to="/ebudget" className="flex space-x-2">
          <img src={edit} />
          <h2 className="text-1xl text-lgBlack">Edit</h2>
        </Link>
        <Link to="/sbudget" className="flex space-x-2">
          <img src={edit} />
          <h2 className="text-1xl text-lgBlack">Add</h2>
        </Link>
      </div>
    </div>
  );
}
