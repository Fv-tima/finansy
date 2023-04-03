import React from 'react'

export default function EProfileForm() {
  return (
    <div>
      <div className="flex flex-col space-x-10 justify-center md:flex-row">
        <div className=" ml-10 flex flex-col w-2/3 text-center space-y-4 md:w-2/3 sm:w-3/3">
          <div className="flex flex-col justify-start p-8 shadow-lg rounded-xl space-y-3">
            <h3 className="text-2xl font-bold">Personal Info</h3>
            <label className="text-dBlack font-bold text-left">Name</label>
            <input
              type="text"
              className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
            />
            <label className="text-dBlack font-bold text-left">Email</label>
            <input
              type="text"
              className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack text-dBlack"
            />
            <label className="text-dBlack font-bold text-left">Password</label>
            <input
              type="text"
              className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack text-dBlack "
            />
            <label for="countries" className="text-dBlack font-bold text-left">
              Country
            </label>
            <select
              id="countries"
              className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
            >
              <option selected>Choose a country</option>
              <option value="Ghana">Ghana</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-2/3 text-center space-y-4 md:w-2/3 sm:w-3/3 ">
          <div className="flex flex-col justify-start p-8  shadow-lg rounded-xl space-y-3">
            <h3 className="text-2xl font-bold text-start">Preferences</h3>
            <label className="text-dBlack font-bold text-left">
              Default Currency
            </label>
            <input
              type="text"
              className="rounded-full flex-1  p-2 border-solid border-2 border-dBlack"
              value="USD"
            />
            <label className="text-dBlack font-bold text-left">
              Exchange currency
            </label>
            <select
              id="countries"
              className="rounded-full p-2 flex-1 border-solid border-2 border-dBlack text-dBlack "
            >
              <option selected>Choose currency</option>
              <option value="Cedis">Ghana</option>
              <option value="Naira">Nigeria</option>
              <option value="Venesuelan Bolivar">Venezuela</option>
            </select>
            <label className="text-dBlack font-bold text-left">
              Exchange Rate
            </label>
            <input
              type="text"
              className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack "
            />
            <label className="text-dBlack font-bold text-left">Language</label>
            <input
              type="text"
              className="rounded-full p-2 flex-1 p-2 border-solid border-2 border-dBlack "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
