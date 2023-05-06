import React from "react";
import { useState } from "react";
import AddModal from "../../components/AddModal";
import { addDoc } from "firebase/firestore";
import { useCol } from "../../context/ColContext";
import { useAuth } from "../../context/AuthContext";
export default function AddSavings() {
  const { savAmt, setSavAmt,savingsCollectionRef } = useCol();
  const { currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const onSubmitsav = async (e) => {
    e.preventDefault();
    try {
      await addDoc(savingsCollectionRef, {
        amount: savAmt,
        userId: currentUser?.uid,
      });

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={onSubmitsav}>
      <div className=" ml-10 flex flex-col w-2/3 text-center space-y-4 md:w-[300px] sm:w-3/3">
        <div className="flex flex-col justify-start p-8 shadow-lg rounded-xl space-y-3">
          <h3 className="text-2xl font-bold">Add Savings</h3>
          <label htmlFor="amount" className="text-dBlack font-bold text-left">
            Amount
          </label>
          <input
            onChange={(e) => {
              setSavAmt(e.target.value);
            }}
            type="number"
            className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack text-dBlack"
          />
        </div>
        <button className="bg-deepBlue text-1xl font-bold-200 text-white rounded  py-3 ">
          ADD
        </button>
      </div>
      {showModal && <AddModal setShowModal={setShowModal} />}
    </form>
  );
}
