import React from "react";
import { Link } from "react-router-dom";

export default function All() {
  return (
    <div className="my-24 mx-auto text-center">
      <h2 className="text-3xl font-bold-300 text-deepBlue mb-6">
        All with Finansy
      </h2>
      <div className="flex space-x-4 justify-center">
        <Link
          to="/login"
          className="p-3 px-6 pt-2 text-deepBlue bg-lgBlue rounded-full baseline hover:bg-deepBlue hover:text-white"
        >
          LOG IN
        </Link>
        <Link
          to="/register"
          className="p-3 px-6 pt-2 text-white bg-deepBlue rounded-full baseline hover:bg-lgBlue hover:text-deepBlue"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
}
