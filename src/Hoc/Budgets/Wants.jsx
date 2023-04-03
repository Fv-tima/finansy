import React from "react";

export default function Wants() {
  return (
    <div className="shadow-lg p-5 m-5 rounded-lg">
      <h2 className="text-2xl text-deepBlue font-bold">Wants</h2>
      <EmptyWants />
    </div>
  );
}

export function EmptyWants() {
  return (
    <div className="flex justify-center items-center">
      <p className="lgBlack">Please add wants first</p>
    </div>
  );
}
