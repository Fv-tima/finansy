import React from 'react'

export default function KeyInfo() {
  return (
      <div className="shadow-lg p-5 m-5 rounded-lg">
      <h2 className="text-2xl text-deepBlue font-bold">Key Information</h2>
      <EmptyKey />
    </div>
  )
}





export function EmptyKey() {
  return (
    <div className="flex justify-center items-center">
      <p className="lgBlack">Please add key information first</p>
    </div>
  );
}
