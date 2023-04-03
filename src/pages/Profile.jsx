import React from 'react'
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ProfileHead from '../Hoc/Profile/ProfileHead';
import ProfileForm from '../Hoc/Profile/ProfileForm';

export default function Profile() {
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <ProfileHead />
         <ProfileForm/>
        </div>
      </div>

      <Footer />
    </div>
  );
}
