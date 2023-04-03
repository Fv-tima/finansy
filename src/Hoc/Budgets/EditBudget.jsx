import React from "react";
import { useCol } from "../../context/ColContext";
import { updateDoc} from "firebase/firestore";
import { db } from "../../firebase-config";
export default function EditBudget() {
  const {
    ebudName,
    ebudAmt,
    ebudCat,
    setEBudName,
    setEBudAmt,
    setEBudCat,
    budgetCollectionRef,
  } = useCol();

  const editBudget = async (e) => {
    e.preventDefault();
    try {
      const budgetDoc = doc(db, "Budget", id);
      await updateDoc(budgetDoc, {
        Name: ebudName,
        Amount: ebudAmt,
        Category: ebudCat,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={()=>editBudget(budget.id)}>
      <div className=" ml-10 flex flex-col w-2/3 text-center space-y-4 md:w-[300px] sm:w-3/3">
        <div className="flex flex-col justify-start p-8 shadow-lg rounded-xl space-y-3">
          <h3 className="text-2xl font-bold">Edit budget</h3>
          <label className="text-dBlack font-bold text-left">Name</label>
          <input
            type="text"
            onChange={(e) => {
              setEBudName(e.target.value);
            }}
            className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
          />
          <label className="text-dBlack font-bold text-left">Amount</label>
          <input
            type="number"
            onChange={(e) => {
              setEBudAmt(e.target.value);
            }}
            className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack text-dBlack"
          />
          <label for="category" className="text-dBlack font-bold text-left">
            Category
          </label>
          <select
            id="category"
            onChange={(e) => {
              setEBudCat(e.target.value);
            }}
            className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
          >
            <option value="Wants" selected>
              Needs
            </option>

            <option value="Wants">Wantsa</option>
          </select>
        </div>
        <button className="bg-deepBlue text-1xl font-bold-200 text-white rounded  py-3 ">
          SAVE
        </button>
      </div>
    </form>
  );
}
