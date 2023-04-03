import React from "react";
import SideBar from "../components/SideBar";
import RHead from "../Hoc/Records/RHead";
import Records from "../Hoc/Records/Records";
import ETrans from "../Hoc/Records/ETrans";
import Footer from "../components/Footer";

export default function RecordPg() {

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
