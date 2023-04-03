import React from 'react'
import exp from "../../assets/images/Exp.png"
import trans from "../../assets/images/Tran.png"

export default function Track() {
  return (
    <div className="p-10 mx-auto mt-24 text-center">
      <h2 className="text-4xl font-bold-300 text-center text-deepBlue">
        Tracking Your spending
      </h2>
      <div className="flex flex-col justify-center mt-14  space-x-10 md:flex-row">
        <img src={exp} />
        <img src={trans} />
      </div>
    </div>
  );
}
