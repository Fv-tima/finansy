import React, {useState} from 'react'
import SideBar from '../components/SideBar';
import SHead from '../Hoc/Savings/SHead';
import Savings from '../Hoc/Savings/Savings';
import Select from '../components/Select';
import Footer from '../components/Footer';
import SKeyInfo from '../Hoc/Savings/SKeyInfo';

export default function SavingsPg() {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <div className="grid md:space-x-[200px] space-x-[100px] overflow-x-hidden">
        <SideBar />
        <div>
          <SHead openModal={openModal} setOpenModal={setOpenModal} />
          <div className="flex md:flex-row flex-col">
            <div className="flex md:flex-row flex-col">
              <Savings />
              <SKeyInfo/>
            </div>
            
          </div>
        </div>
      </div>
      {openModal ? (
        <Select openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}
