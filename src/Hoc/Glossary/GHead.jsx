import plus from "../../assets/images/plus.png"
import back from "../../assets/images/back.png";
import React from 'react'

export default function GHead() {
  return (
    <div>
      <div className="p-5 flex flex-row justify-between items-center">
        <h2 className="text-3xl text-deepBlue font-bold-200">Glossary</h2>
        <div className="flex space-x-3">
          <button className="border-solid border-2 border-deepNlue rounded-full px-5 ">
            <img src={back} />
          </button>
          <button className="bg-deepBlue rounded-full p-4">
            <img src={plus} />
          </button>
        </div>
      </div>
    </div>
  );
}
