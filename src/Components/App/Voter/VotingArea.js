import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import Spinner from "../../Spinner";
import { Candidate } from "./Candidate";

function VotingArea() {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState();
  const [ballotStatus, setBallotStatus] = useState("inactive");
  const { isLoading, setIsLoading, setErrorMessage } = useData();
  async function GetBallotInfo() {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("ballotId");
    const email = JSON.parse(localStorage.getItem("user")).email;
    setIsLoading(true);
    try {
      const res = await fetch(
        `
https://wevotepushapi-0e45561659e2.herokuapp.com
/api/v1/pollinfo?ballot_id=${id}`,
        {
          method: "get",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json",
            "X-User-Token": token,
            "X-User-Email": email,
          },
        }
      );
      const data = await res.json();
      if (!res.ok) {
        return "error";
      }
      if (data.name) {
        setName(data.name);
        setCandidates(data.candidates);
        setBallotStatus(data.ballot_status);
        setIsLoading(false);
        return "success";
      }
    } catch {
      setErrorMessage("There was an error trying to fetch data");
    } finally {
    }
  }

  useEffect(function () {
    GetBallotInfo();
  }, []);
  return (
    <div className="w-full h-full">
      {isLoading ? <Spinner /> : ""}

      {candidates.length !== 0 ? <Header title={name} /> : ""}
      {ballotStatus === "inactive" ? <InactiveBallotMessage /> : ""}
      <div className="w-full h-full grid grid-cols-2   gap-x-0.5 ">
        {candidates.map((candidate) => {
          return (
            <Candidate
              candidate={candidate}
              GetBallotInfo={GetBallotInfo}
              key={candidate.id}
            />
          );
        })}
      </div>
    </div>
  );
}

function InactiveBallotMessage() {
  return (
    <div className="flex pulse poppins-regular flex-col items-center w-full mt-10">
      <p className="w-42  text-center font-bold text-2xl text-blue-950 ">
        Dear Voter,<br></br>You have been registered for a Poll which is not
        active .Contact your Officials.
      </p>
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
export default VotingArea;
