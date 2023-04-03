import React from "react";

export default function Savings() {
  return (
    <div className="shadow-lg p-5 m-5 rounded-lg md:w-[400px] md:h-[200px]">
      <h2 className="text-2xl text-deepBlue font-bold">Savings</h2>
      <EmptySav />
    </div>
  );
}

export function EmptySav() {
  return (
    <div className="flex justify-center items-center ">
      <p className="lgBlack">Please add a savings goal first</p>
    </div>
  );
}
