import React from "react";

export default function ETrans() {
  return (
    <form action="">
      <div className=" ml-10 flex flex-col w-2/3 text-center space-y-4 md:w-[300px] sm:w-3/3">
        <div className="flex flex-col justify-start p-8 shadow-lg rounded-xl space-y-3">
          <h3 className="text-2xl font-bold">Edit transactions</h3>
          <label className="text-dBlack font-bold text-left">Name</label>
          <input
            type="text"
            className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
          />
          <label className="text-dBlack font-bold text-left">Amount</label>
          <input
            type="number"
            className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack text-dBlack"
          />
          <label for="category" className="text-dBlack font-bold text-left">
            Category
          </label>
          <select
            id="category"
            className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
          >
            <option value="expenses" selected>
              Expenses
            </option>

            <option value="payment">Payment</option>
          </select>
        </div>
        <button className="bg-deepBlue text-1xl font-bold-200 text-white rounded  py-3 ">
          SAVE
        </button>
      </div>
    </form>
  );
}
