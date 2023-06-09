import React from "react";
import SideBar from "../../components/SideBar";
import RHead from "./RHead";
import Records from "./Records";
import ETrans from "./ETrans";
import Footer from "../../components/Footer";

export default function ERecords() {
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <RHead />
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col">
              <Records />
            </div>
            <ETrans />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
