import React from "react";
import { Link } from "react-router-dom";
import budget from "../../assets/images/Bud.png";
import records from "../../assets/images/Rec.png";
import savings from "../../assets/images/Sav.png";
import cancel from "../../assets/images/4.png";


export default function SelectMod({ openModal, setOpenModal }) {
  function add() {
    setOpenModal(false);
  }
  return (
    <div
      className=" bg-white flex flex-col space-y-8 items-center
      top-[40%] left-[30%]
  md:left-[40%] fixed rounded-lg z-[1000] p-[20px] shadow-lg"
    >
      <button className="border-2 border-solid border-deepNlue p-3 rounded-full ml-[10rem]">
        <img src={cancel} onClick={add} />
      </button>

      <h2 className="text-1xl font-bold text-dBlack">Select section</h2>
      <div className="flex space-x-8">
        <Link to="/budget" className="flex space-x-2">
          <img src={budget} />
          <h2 className="text-1xl text-lgBlack">Budget</h2>
        </Link>
        <Link to="/records" className="flex space-x-2">
          <img src={records} />
          <h2 className="text-1xl text-lgBlack">Records</h2>
        </Link>
      </div>
      <Link to="savings" className="flex space-x-2">
        <img src={savings} />
        <h2 className="text-1xl text-lgBlack">Savings</h2>
      </Link>
    </div>
  );
}
