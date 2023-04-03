import React, { useState } from "react";
import SideBar from "../components/SideBar";
import HomeHead from "../Hoc/Home/HomeHead";
import Footer from "../components/Footer";
import Records from "../Hoc/Records/Records";
import Budgets from "../Hoc/Budgets/Budgets";
import Savings from "../Hoc/Savings/Savings";
import SelectMod from "../Hoc/Home/SelectMod";

function Home() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <HomeHead openModal={openModal} setOpenModal={setOpenModal} />
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col">
              <Records />
              <Savings />
            </div>
            <Budgets />
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

export default Home;
