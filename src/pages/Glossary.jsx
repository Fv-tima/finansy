import GHead from "../Hoc/Glossary/GHead";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import FinTerm from "../Hoc/Glossary/FinTerm";
import Def from "../Hoc/Glossary/Def";
import React from 'react'

export default function Glossary() {
  return (
    <div>
      <div className="grid md:space-x-[220px] space-x-[120px] overflow-x-hidden">
        <SideBar />
        <div>
          <GHead/>
          <div className="flex  flex-col my-4">
            <FinTerm />
            <Def/>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

