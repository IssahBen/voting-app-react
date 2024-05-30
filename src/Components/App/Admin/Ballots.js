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
    <div className="flex  poppins-bold w-full justify-between items-center  mt-5 mb-2   ">
      <div className="flex  w-72  p-2 space-x-1 justify-start items-center  mr-5 border-1 border-gray-500">
        <p className="  font-bold text-xl text-black">Ongoing Campaigns:</p>
        <p className="text-xl font-extrabold text-black">{size}</p>
      </div>

      {/* <NavLink
        to="/admin/create"
        className={` text-center  font-mono btn tracking-widest rounded-lg  text-white bg-green-700 px-2  border  border-gray-700`}
      >
        Add Ballot
      </NavLink> */}
      <div className="">
        <button onClick={handleNavigation} class="c-button c-button--gooey">
          {" "}
          Add Ballot
          <div class="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <svg
          style={{ display: "block", height: " 0", width: " 0" }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                result="blur"
                stdDeviation="10"
                in="SourceGraphic"
              ></feGaussianBlur>
              <feColorMatrix
                result="goo"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                mode="matrix"
                in="blur"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
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
