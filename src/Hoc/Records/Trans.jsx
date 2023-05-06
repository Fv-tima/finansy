import React from "react";

export default function Trans() {
    
  return (
    <div className="shadow-lg p-5 m-5 rounded-lg md:w-[400px] md:h-[200px]">
          <h2 className="text-2xl text-deepBlue font-bold">Transactions</h2>
          <p className="text-1xl text-lgBlack"></p>
      <EmptyTrans />
    </div>
  );
}

export function EmptyTrans() {
  return (
    <div className="flex justify-center items-center">
      <p className="lgBlack">Please add records first</p>
    </div>
  );
}

// export function Trans() {
//   const { recordData, loader } = useCol
//   return (
//     <div className="flex flex-col">
//       {recordData.map}
//    </div>
//   )
// }