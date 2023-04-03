import React from 'react'
import resume from "../../assets/images/Res2.png"
import key from "../../assets/images/Key.png"

export default function Grow() {
  return (
    <div className="p-10 mx-auto mt-24 text-center bg-tintBlue">
      <h2 className="text-4xl font-bold-300 text-center text-deepBlue">
        Grow your savings
      </h2>
      <div className="flex flex-col justify-center mt-14 space-x-10 md:flex-row">
          <img src={resume} />
          <img src={key} />
      </div>
    </div>
  );
}
