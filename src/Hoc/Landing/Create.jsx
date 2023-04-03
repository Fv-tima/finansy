import React from 'react'
import res from "../../assets/images/Resume.png"
import need from "../../assets/images/Needs.png"
import want from "../../assets/images/Wants.png"

export default function Create() {
  return (
    <div className="p-10 mx-auto mt-24 text-center bg-tintBlue">
      <h2 className="text-4xl font-bold-300 text-center text-deepBlue">Creating your budget</h2>
      <div className="flex flex-col justify-center mt-14 mx-auto space-x-10 md:flex-row">
        <img src={res} />
        <div className="flex-col space-y-4 mx-auto md:space-y-8">
          <img src={need} />
          <img src={want} />
        </div>
      </div>
    </div>
  );
}
