import { Card, Dropdown } from "flowbite-react";
import defaultpic from "../../../images/profile-pic.png";

import { NavLink } from "react-router-dom";
export function Candidate({ candidate }) {
  function HandleVote() {}
  return (
    <Card className="h-64 poppins-light">
      <div className="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={candidate.image ? candidate.image : defaultpic}
          alt="Voter"
        />
        <h5 className="mb-1  text-gray-900 dark:text-white">
          {candidate.first_name} {candidate.last_name}
        </h5>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <button
            onClick={HandleVote}
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Vote
          </button>
          <p className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {candidate.cached_scoped_subscribe_votes_up}
          </p>
        </div>
      </div>
    </Card>
  );
}
