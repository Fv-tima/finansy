import plus from "../../assets/images/plus.png";
import back from "../../assets/images/back.png";
import { Link } from "react-router-dom";

export default function ProfileHead() {
  return (
    <div>
      <div className="p-5 flex flex-row justify-between items-center">
        <h2 className="text-3xl text-deepBlue font-bold-200">Profile</h2>
        <div className="flex space-x-3">
          <button className="border-solid border-2 border-deepNlue rounded-full px-5 ">
            <img src={back} />
          </button>
          <Link to="/eprofile" className="bg-deepBlue rounded-full p-4">
            <img src={plus} />
          </Link>
        </div>
      </div>
    </div>
  );
}
