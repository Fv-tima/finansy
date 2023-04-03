import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import BHead from "../Hoc/Budgets/BHead";
import Budgets from "../Hoc/Budgets/Budgets";
import KeyInfo from "../Hoc/Budgets/KeyInfo";
import Needs from "../Hoc/Budgets/Needs";
import Wants from "../Hoc/Budgets/Wants";
import Select from "../components/Select";
import { onSnapshot, getDocs } from "firebase/firestore";
import { useCol } from "../context/ColContext";

import Footer from "../components/Footer";

export default function BudgetsPg() {
  useCol();
  const [openModal, setOpenModal] = useState(false);


  // onSnapshot(budgetCollectionRef, (snapshot) => {
  //   const newBud = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   setBudgetData(newBud);
  // })
  // useEffect(() => {
  //   const unsubscribe = bQuery.onSnapshot((snapshot) => {
  //     const newBud = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setBudgetData(newBud);
  //   });
  //   return unsubscribe;
  // }, []);
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <BHead openModal={openModal} setOpenModal={setOpenModal} />
          <div className="flex md:flex-row flex-col">
            <Budgets />
            <div className="flex flex-col">
              <KeyInfo />
              <Needs />
              <Wants />
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <Select openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
