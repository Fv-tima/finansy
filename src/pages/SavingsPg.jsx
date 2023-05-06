import React from "react";
import SideBar from "../components/SideBar";
import SHead from "../Hoc/Savings/SHead";
import Savings from "../Hoc/Savings/Savings";
import Tips from "../Hoc/Savings/Tips";
import Footer from "../components/Footer";
import SKeyInfo from "../Hoc/Savings/SKeyInfo";

export default function SavingsPg() {
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <SHead />
          <div className="flex md:flex-row flex-col">
            <div className="flex md:flex-row flex-col">
              <Savings />
              <SKeyInfo />
            </div>
            <Tips />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
