import React from 'react'
import plus from "../../assets/images/plus.png";

export default function EProfileHead() {
  return (
    <div>
      <div className="p-5 flex flex-row justify-between items-center">
        <h2 className="text-3xl text-deepBlue font-bold-200">Profile</h2>

        <button to="/eprofile" className="bg-deepBlue rounded-full p-3">
          <img src={plus} />
        </button>
      </div>
    </div>
  );
}
