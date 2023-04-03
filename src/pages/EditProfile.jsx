import React from 'react'
import SideBar from '../components/SideBar'
import EProfileHead from '../Hoc/Profile/EProfileHead'
import EProfileForm from '../Hoc/profile/EProfileForm';
import Footer from '../components/Footer';
export default function EditProfile() {
  return (
    <div >
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <EProfileHead />
          <EProfileForm/>
        </div>
      </div>

      <Footer />
    </div>
  );
}
