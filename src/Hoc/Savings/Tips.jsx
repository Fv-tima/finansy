import React from "react";
import tip from "../../assets/images/image 17.png";

export default function Tips() {
  return (
    <div className="shadow-lg p-5 m-5 rounded-lg md:w-[400px] md:h-[200px]">
      <h2 className="text-2xl mb-2 text-deepBlue font-bold">
        Financial Tip of the day
      </h2>
      <div className="flex md:flex-row flex-col space-y-4 md:space-x-4">
        <img src={tip} />
        <div className="space-y-2">
          <h4 className="text-deepBlue font-bold">PRIORITIZE YOUR DEBTS</h4>
          <p>
            Saving is an important part of managing your finances but,having
            said that sometimes it is more beneficial to use your spare cash to
            clearany debts. As generally, the interest you pay for your
            borrowing will almost certainly be more than the interest you 'll
            receive from any savings <br />
            You should be keeping up with your minimum monthly repayments, but
            if you can afford overpayments (and if the leader allows you to do
            so), consider making them.
          </p>
        </div>
      </div>
    </div>
  );
}
