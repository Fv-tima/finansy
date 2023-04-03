import React from "react";

export default function Needs() {
  return (
    <div className="shadow-lg p-5 m-5 rounded-lg">
      <h2 className="text-2xl text-deepBlue font-bold">Needs</h2>
      <EmptyNeeds />
    </div>
  );
}

export function EmptyNeeds() {
  return (
    <div className="flex justify-center items-center">
      <p className="lgBlack">Please add needs first</p>
    </div>
  );
}
