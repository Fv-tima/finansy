import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import EBHead from "./EBhead";

import EditBudget from "./EditBudget";
import KeyInfo from "./KeyInfo";
import Needs from "./Needs";
import Wants from "./Wants";


import Footer from "../../components/Footer";

export default function EBudgets() {

  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <EBHead />
          <div className="flex md:flex-row flex-col">
            <EditBudget />
            <div className="flex flex-col">
              <KeyInfo />
              <Needs />
              <Wants />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
