import React, { useState } from "react";
import SideBar from "../components/SideBar";
import RHead from "../Hoc/Records/RHead";
import Records from "../Hoc/Records/Records";
import Calendars from "../Hoc/Records/Calendar";
import Trans from "../Hoc/Records/Trans";
import SelectRec from "../Hoc/Records/SelectRec";
import Footer from "../components/Footer";

export default function RecordPg() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <RHead openModal={openModal} setOpenModal={setOpenModal} />
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col">
              <Calendars />
              <Records />
            </div>
            <Trans />
          </div>
        </div>
      </div>
      {openModal ? (
        <SelectRec openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
