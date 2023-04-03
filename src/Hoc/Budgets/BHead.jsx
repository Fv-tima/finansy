import React from "react";
import plus from "../../assets/images/plus.png";

export default function BHead({ openModal, setOpenModal }) {
  function add() {
    setOpenModal(true);
  }
  return (
    <div>
      <div className="p-5 flex flex-row justify-between items-center">
        <h2 className="text-3xl text-deepBlue font-bold-300">Budgets</h2>
        <button onClick={add} className="bg-deepBlue rounded-full p-4">
          <img src={plus} />
        </button>
      </div>
    </div>
  );
}
