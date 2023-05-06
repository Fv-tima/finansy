import React from "react";

export default function EditSavings() {
  return (
    <form>
      <div className=" ml-10 flex flex-col w-2/3 text-center space-y-4 md:w-[300px] sm:w-3/3">
        <div className="flex flex-col justify-start p-8 shadow-lg rounded-xl space-y-3">
          <h3 className="text-2xl font-bold">Edit Savings</h3>
          <label htmlFor="goal" className="text-dBlack font-bold text-left">
            Goal
          </label>
          <input
            type="number"
            className="rounded-full flex-1 p-2 border-solid border-2 border-dBlack text-dBlack"
          />
        </div>
        <button className="bg-deepBlue text-1xl font-bold-200 text-white rounded  py-3 ">
          SAVE
        </button>
      </div>
    </form>
  );
}
