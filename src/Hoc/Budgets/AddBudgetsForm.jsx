import React, {useState} from "react";
import { useCol } from "../../context/ColContext";
import { useAuth } from "../../context/AuthContext";
import { addDoc } from "firebase/firestore";
import AddModal from "../../components/AddModal";


export default function AddBudgetForm() {
  const {
    budName,
    budAmt,
    budCat,
    setBudName,
    setBudAmt,
    setBudCat,
    budgetCollectionRef,
  } = useCol();
  const {currentUser} = useAuth()
  const [showModal, setShowModal] = useState(false)

  const onSubmitBudget = async (e) => {
    e.preventDefault();
    try {
      await addDoc(budgetCollectionRef, {
        name: budName,
        amount: budAmt,
        category: budCat,
      userId: currentUser?.uid

      });

      setShowModal(true)
      setTimeout(()=>{
        setShowModal(false)
      }, 3000)

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={onSubmitBudget}>
      <div className=" ml-10 flex flex-col w-2/3 text-center space-y-4 md:w-[300px] sm:w-3/3">
        <div className="flex flex-col justify-start p-8 shadow-lg rounded-xl space-y-3">
          <h3 className="text-2xl font-bold">Add budget</h3>
          <label className="text-dBlack font-bold text-left">Name</label>
          <input
            type="text"
            onChange={(e) => {
              setBudName(e.target.value);
            }}
            className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
          />
          <label className="text-dBlack font-bold text-left">Amount</label>
          <input
            type="number"
            onChange={(e) => {
              setBudAmt(e.target.value);
            }}
            className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack text-dBlack"
          />
          <label for="category" className="text-dBlack font-bold text-left">
            Category
          </label>
          <select
            id="category"
            onChange={(e) => {
              setBudCat(e.target.value);
            }}
            className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
          >
            <option value="Needs" selected>
              Needs
            </option>

            <option value="Wants">Wants</option>
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
