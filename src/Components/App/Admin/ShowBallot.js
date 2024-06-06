import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useData } from "../../../Context/DataContext";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner";
import { CandidateItem } from "./CandidateItem";

export default function ShowBallot() {
  const { id } = useParams();
  const { isLoading, setIsLoading, currentBallot, UpdateStatus } = useData();
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

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
  async function HandleStatus() {
    const status = await UpdateStatus();
    if (status === "success") {
      alert("ballot Active");
    }
  }
  return (
    <div className="w-full h-full">
      <Header title={currentBallot.name} />
      {candidates.length === 0 && !isLoading ? <EmptyCandidateMessage /> : ""}
      {isLoading ? <Spinner /> : ""}
      {!isLoading && candidates.length !== 0 ? (
        <Candidates size={candidates.length} id={id} />
      ) : (
        ""
      )}
      <div className="flex justify-center items-center w-full mt-5 mb-5">
        <p className="pr-5 poppins-bold text-2xl text-gray-500">Status:</p>
        <button
          onClick={HandleStatus}
          className={`sbutton rounded-full px-2 ${
            currentBallot.status === "inactive" ? "bg-red-600" : "bg-green-700"
          }`}
        >
          {currentBallot.status}
        </button>
      </div>
      <div className="w-full h-full grid grid-cols-2   gap-x-0.5 md:grid-cols-3">
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
  const navigate = useNavigate();
  function HandleNavigation() {
    navigate(`/admin/ballots/${id}/create`);
  }
  return (
    <div className="flex   w-full justify-between items-center  mt-5 mb-2   ">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Candidates</div>
          <div className="stat-value">{size < 10 ? `0${size}` : size}</div>
        </div>
      </div>

      <button className="icon-btn add-btn" onClick={HandleNavigation}>
        <div className="add-icon"></div>
        <div className="btn-txt">Add Candidate</div>
      </button>
    </div>
  );
}

function Header({ title }) {
  return (
    <div className="flex justify-center w-full  mt-5 tracking-wide poppins-bold">
      {" "}
      <h1 className="mb-4 text-4xl font-extrabold leading-none  text-gray-500 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
    </div>
  );
}
