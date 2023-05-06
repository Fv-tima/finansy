import React from "react";
import {useState} from "react"
import GHead from "../Hoc/Glossary/GHead";
import SelectMod from "../Hoc/Home/SelectMod";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import FinTerm from "../Hoc/Glossary/FinTerm";
import Def from "../Hoc/Glossary/Def";

export default function Glossary() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="grid md:space-x-[220px] space-x-[120px] overflow-x-hidden">
        <SideBar />
        <div>
          <GHead setOpenModal={setOpenModal} />
          <div className="flex  flex-col my-4">
            <FinTerm />
            <Def />
          </div>
        </div>
      </div>
      {openModal ? (
        <SelectMod openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
}
