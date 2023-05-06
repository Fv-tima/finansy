import React from "react";
import SideBar from "../../components/SideBar";
import ERHead from "./ERHead";
import Records from "./Records";
import AddTrans from "./AddTrans";
import Footer from "../../components/Footer";

export default function AddRecords() {
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <ERHead />
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col">
              <Records />
            </div>
            <AddTrans />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
