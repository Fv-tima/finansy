import React from "react";
import {useState} from "react"
import AddModal from "../../components/AddModal";
import { addDoc } from "firebase/firestore";
import { useCol } from "../../context/ColContext";
import { useAuth } from "../../context/AuthContext";
export default function AddTrans() {
    const {
      recName,
      recAmt,
      recCat,
      setRecName,
      setRecAmt,
      setRecCat,
      recordCollectionRef,
    } = useCol();
    const { currentUser } = useAuth();
    const [showModal, setShowModal] = useState(false);

    const onSubmitRecord = async (e) => {
      e.preventDefault();
      try {
        await addDoc(recordCollectionRef, {
          name: recName,
          amount: recAmt,
          category: recCat,
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
    <form onSubmit={onSubmitRecord}>
      <div className=" ml-10 flex flex-col w-2/3 text-center space-y-4 md:w-[300px] sm:w-3/3">
        <div className="flex flex-col justify-start p-8 shadow-lg rounded-xl space-y-3">
          <h3 className="text-2xl font-bold">Add transactions</h3>
          <label htmlFor="name" className="text-dBlack font-bold text-left">
            Name
          </label>
          <input
            onChange={(e) => {
              setRecName(e.target.value);
            }}
            type="text"
            className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
          />
          <label htmlFor="amount" className="text-dBlack font-bold text-left">
            Amount
          </label>
          <input
            onChange={(e) => {
              setRecAmt(e.target.value);
            }}
            type="number"
            className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack text-dBlack"
          />
          <label htmlFor="category" className="text-dBlack font-bold text-left">
            Category
          </label>
          <select
            onChange={(e) => {
              setRecCat(e.target.value);
            }}
            id="category"
            className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
          >
            <option defaultValue="expenses" >
              Expenses
            </option>

            <option value="payment">Payment</option>
          </select>
        </div>
        <button className="bg-deepBlue text-1xl font-bold-200 text-white rounded  py-3 ">
          ADD
        </button>
      </div>
      {showModal && <AddModal setShowModal={setShowModal} />}
    </form>
  );
}
