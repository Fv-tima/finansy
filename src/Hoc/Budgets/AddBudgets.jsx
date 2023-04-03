import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import EBHead from "./EBhead";
import AddBudgetForm from "./AddBudgetsForm";

import Footer from "../../components/Footer";

export default function AddBudgets() {
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <EBHead />
          <AddBudgetForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
