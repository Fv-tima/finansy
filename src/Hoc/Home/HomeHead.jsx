import React, {useState} from "react";
import toggle from "../../assets/images/Act.png";
import plus from "../../assets/images/plus.png"


export default function HomeHead({openModal, setOpenModal}) {
     function add() {
       setOpenModal(true);
     }
  return (
    <div>
      <div className="p-5 flex flex-row justify-between items-center">
        <h2 className="text-3xl text-deepBlue font-bold-200">Overview</h2>
        <div className="flex flex-row md:space-x-[50px] space-x-2">
          <div className="flex space-x-2 items-center">
            <span>USD</span>
            <img className="w-auto" src={toggle} />
            <span>VES</span>
                  </div>
                  <button onClick={add} className="bg-deepBlue rounded-full p-4">
                      <img src={plus} />
                  </button>
        </div>
      </div>
    </div>
  );
}
