import React from "react";
import SideBar from "../../components/SideBar";
import ESHead from "./ESHead";
import EditSavings from "./EditSavings";
import AddSavings from "./AddSavings";
import Footer from "../../components/Footer";

export default function ESavings() {
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <ESHead />
          <div className="flex md:flex-row flex-col">
            <EditSavings />
            <AddSavings />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
