import React from "react";
import {useState} from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import ProfileHead from "../Hoc/Profile/ProfileHead";
import ProfileForm from "../Hoc/Profile/ProfileForm";
import SelectProf from "../Hoc/Profile/SelectProf";

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <ProfileHead setOpenModal={setOpenModal} />
          <ProfileForm />
        </div>
      </div>
      {openModal ? (
        <SelectProf openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
