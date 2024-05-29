import { NavLink, useParams } from "react-router-dom";
import { useData } from "../../../Context/DataContext";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner";
import { CandidateItem } from "./CandidateItem";

export default function ShowBallot() {
  const { id } = useParams();
  const { isLoading, setIsLoading, currentBallot } = useData();
  const [candidates, setCandidates] = useState([]);

  useEffect(
    function () {
      async function GetCandidates(id) {
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
      GetCandidates(id);
    },
    [id, setIsLoading]
  );
  return (
    <div className="w-full h-full">
      <Header title={currentBallot} />
      {candidates.length === 0 && !isLoading ? <EmptyCandidateMessage /> : ""}
      {isLoading ? <Spinner /> : ""}
      {!isLoading && candidates.length !== 0 ? (
        <Candidates size={candidates.length} id={id} />
      ) : (
        ""
      )}
      <div className="w-full h-full grid grid-cols-2  md:grid-cols-3">
        {candidates.map((candidate) => {
          return (
            <CandidateItem
              candidate={candidate}
              ballotId={id}
              key={candidate.id}
            />
          );
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

function Candidates({ size, id }) {
  return (
    <div className="flex   w-full justify-between items-center  mt-5 mb-2   ">
      <div className="flex  w-72  p-2 space-x-1 justify-start items-center  mr-5 border-1 border-gray-500">
        <p className="text-2xl  font-bold text-blue-950">
          Number of Candidates:
        </p>
        <p className="text-xl text-black">{size}</p>
      </div>

      <NavLink
        to={`/admin/ballots/${id}/create`}
        className={`  text-center font-mono font-bold btn rounded-lg  text-black hover:bg-red-700 px-2  border tracking-widest border-gray-700`}
      >
        Add <span>Candidate</span>
      </NavLink>
    </div>
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
