import { NavLink, useParams } from "react-router-dom";
import { useData } from "../../../Context/DataContext";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner";
import { Card, Dropdown } from "flowbite-react";
import defaultpic from "../../../images/profile-pic.png";
export default function ShowBallot() {
  const { id } = useParams();
  const { isLoading, setIsLoading, currentBallot } = useData();
  const [candidates, setCandidates] = useState([]);

  useEffect(
    function () {
      async function GetCandidate(id) {
        const token = localStorage.getItem("token");
        const email = JSON.parse(localStorage.getItem("user")).email;
        setIsLoading(true);
        try {
          const res = await fetch(
            `http://10.0.0.121:3000/api/v1/ballots/${id}/candidates`,
            {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                "X-User-Token": token,
                "X-User-Email": email,
              },
            }
          );
          const data = await res.json();
          console.log(data);
          if (!res.ok) {
            return "error";
          }
          if (data) {
            setCandidates(data);
            setIsLoading(false);
            return "success";
          }
        } catch (error) {
          console.error(error);
        } finally {
        }
      }
      console.log(2);
      GetCandidate(id);
    },
    [id, setIsLoading]
  );
  return (
    <div className="w-full h-full">
      <Header title={currentBallot} />
      {candidates.length === 0 && !isLoading ? <EmptyCandidateMessage /> : ""}
      {isLoading ? <Spinner /> : ""}
      {!isLoading ? <Candidates size={candidates.length} /> : ""}
      <div className="w-full h-full grid grid-cols-2 ">
        {candidates.map((candidate) => {
          return <CandidateItem candidate={candidate} key={candidate.id} />;
        })}
      </div>
    </div>
  );
}

function EmptyCandidateMessage() {
  return (
    <div className="flex pulse flex-col items-center w-full mt-10">
      <p className="w-42 font-bold text-2xl text-blue-950 text-center">
        You seem to have no Ballots
      </p>
      <NavLink to="/admin/create" className=" rounded-full p-2 bg-red-500">
        + Create one
      </NavLink>
    </div>
  );
}

function Candidates({ size }) {
  return (
    <div className="flex   w-full justify-between items-center  mt-5 mb-2   ">
      <div className="flex  w-72  p-2 space-x-1 justify-start items-center  mr-5 border-1 border-gray-500">
        <p className="text-2xl  font-bold text-blue-950">
          Number of Candidates:
        </p>
        <p className="text-xl text-black">{size}</p>
      </div>
      <div className="pulse">
        <NavLink
          to="/admin/create"
          className={`   font-mono font-bold btn rounded-lg  text-black hover:bg-red-700 px-2 py-2 border tracking-widest border-gray-700`}
        >
          + Add Candidate
        </NavLink>
      </div>
    </div>
  );
}

function CandidateItem() {
  return (
    <Card className="h-80">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>

          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={defaultpic}
          alt="Voter"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>

        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Votes
          </p>
          <p className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            3
          </p>
        </div>
      </div>
    </Card>
  );
}
function Header({ title }) {
  return (
    <div className="flex justify-center w-full  mt-5 tracking-wide ">
      {" "}
      <h1 className="mb-4 text-4xl font-extrabold leading-none  text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
    </div>
  );
}
