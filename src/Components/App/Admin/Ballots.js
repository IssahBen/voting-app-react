import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import { NavLink, useNavigate } from "react-router-dom";

import BallotItem from "./BallotItem";
import Spinner from "../../Spinner";

function Ballots() {
  const [ballots, setBallots] = useState([]);
  const { isLoading, setIsLoading } = useData();

  async function GetBallots() {
    const token = localStorage.getItem("token");
    const email = JSON.parse(localStorage.getItem("user")).email;
    setIsLoading(true);
    try {
      const res = await fetch(`http://10.0.0.121:3000/api/v1/ballots`, {
        method: "get",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          "X-User-Token": token,
          "X-User-Email": email,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        return "error";
      }
      if (data?.length >= 0) {
        setBallots(data);
        setIsLoading(false);
        return "success";
      }
    } catch {
      alert("there was an error trying to fetch data");
    } finally {
    }
  }

  useEffect(function () {
    console.log(3);
    GetBallots();
  }, []);
  return (
    <div className=" w-full h-full">
      {isLoading ? <Spinner /> : ""}
      {isLoading === true || ballots.length === 0 ? (
        ""
      ) : (
        <ActivePolls size={ballots.length} />
      )}

      {ballots.length === 0 && isLoading === false ? (
        <EmptyBallotMessage />
      ) : (
        ""
      )}

      <div className="flex items-start space-y-2  md:grid md:grid-cols-2 flex-col ">
        {ballots.map((ballot) => {
          return (
            <BallotItem
              GetBallots={GetBallots}
              ballot={ballot}
              key={ballot.id}
            />
          );
        })}
      </div>
    </div>
  );
}

function ActivePolls({ size }) {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate("/admin/create");
  }
  return (
    <div className="flex  poppins-bold w-full justify-between items-center  mt-5 mb-2  p-1 ">
      {/* <div className="flex    p-2 space-x-1 justify-start items-center  mr-5 border-1 border-gray-500">
        <p className="  font-bold text-xl text-black">Campaigns:{size} </p>
      </div> */}
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Total Ballots</div>
          <div class="stat-value">{size < 10 ? `0${size}` : size}</div>
        </div>
      </div>

      <button class="icon-btn add-btn" onClick={handleNavigation}>
        <div class="add-icon"></div>
        <div class="btn-txt">Add Ballot</div>
      </button>
    </div>
  );
}
function EmptyBallotMessage() {
  return (
    <div className="flex pulse poppins-regular flex-col items-center w-full mt-10">
      <p className="w-42 font-bold text-2xl text-blue-950 text-center">
        You seem to have no Ballots
      </p>
      <NavLink to="/admin/create" className=" rounded-full p-2 bg-red-500">
        + Create one
      </NavLink>
    </div>
  );
}

export default Ballots;
