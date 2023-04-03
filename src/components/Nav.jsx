import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className=" m-6">
      <div className="flex  justify-end space-x-6">
       <Link to="/login"
          className="p-3 px-6 pt-2 text-deepBlue bg-lgBlue rounded-full baseline hover:bg-deepBlue hover:text-white"
        >
          LOG IN
        </Link>
        <Link  to="/register"
          className="p-3 px-6 pt-2 text-white bg-deepBlue rounded-full baseline hover:bg-lgBlue hover:text-deepBlue"
        >
          SIGN UP
        </Link>
      </div>
    </nav>
  );
}
