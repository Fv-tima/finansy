import React from "react";
import cancel from "../assets/images/4.png";
import success from "../assets/images/Suc.png";
export default function SavedModalB() {
  return (
    <div
      className=" bg-white flex flex-col space-y-8 items-center
      top-[40%] left-[30%]
  md:left-[40%] fixed rounded-lg z-[1000] shadow-lg p-14 pt-108"
    >
      <button onClick={add} className="bg-deepBlue p-3 rounded-full ml-[10rem]">
        <img src={cancel} />
      </button>

      <h2 className="text-1xl font-bold text-dBlack">Saved Succesfully</h2>
      <img src={success} />
    </div>
  );
}
