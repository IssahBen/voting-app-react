import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../../Context/DataContext";
import { useEffect, useState } from "react";

export default function Voters() {
  const { id } = useParams();
  const { setIsLoading } = useData();
  const [voters, setVoters] = useState([]);
  async function GetVoters() {
    const token = localStorage.getItem("token");
    const email = JSON.parse(localStorage.getItem("user")).email;
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://10.0.0.121:3000/api/v1/ballots/${id}/voters`,
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
      if (data?.length >= 0) {
        setVoters(data);
        setIsLoading(false);
        return "success";
      }
    } catch {
      alert("there was an error trying to fetch data");
    } finally {
    }
  }

  useEffect(function () {
    GetVoters();
  }, []);
  return (
    <>
      <div className="flex  mt-5 mb-5 poppins-bold w-full justify-center items-center text-2xl text-gray-500">
        Voters Record
      </div>

      <ActiveVoters size={voters.length} />
      <div class="relative overflow-x-auto">
        <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
                Last Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {voters.map((voter) => {
              return <VoterItem voter={voter} key={voter.id} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function VoterItem({ voter }) {
  const { destroyVoter } = useData();
  const navigate = useNavigate();
  const { id } = useParams();
  async function handleDelete(id) {
    const status = await destroyVoter(id, voter.id);
    if (status === "success") {
      alert("Voter deleted");
      navigate(0);
    }
  }
  function handleNavigation() {
    navigate(`/admin/ballots/${id}/voters/${voter.id}`);
  }
  return (
    <tr class="bg-white dark:bg-gray-800">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {voter.email}
      </th>
      <td class="px-6 py-4">{voter.first_name}</td>
      <td class="px-6 py-4">{voter.last_name}</td>
      <td class="px-6 py-4">
        <div className="flex flex-col space-y-2">
          <button class="edit-button" onClick={handleNavigation}>
            <svg class="edit-svgIcon" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
            </svg>
          </button>
          <button class="bin-button " onClick={handleDelete}>
            <svg
              class="bin-top"
              viewBox="0 0 39 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="5"
                x2="39"
                y2="5"
                stroke="white"
                stroke-width="4"
              ></line>
              <line
                x1="12"
                y1="1.5"
                x2="26.0357"
                y2="1.5"
                stroke="white"
                stroke-width="3"
              ></line>
            </svg>
            <svg
              className="bin-bottom"
              viewBox="0 0 33 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_8_19" fill="white">
                <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
              </mask>
              <path
                d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                fill="white"
                mask="url(#path-1-inside-1_8_19)"
              ></path>
              <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
              <path d="M21 6V29" stroke="white" stroke-width="4"></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

function ActiveVoters({ size }) {
  const navigate = useNavigate();
  const { id } = useParams();
  function handleNavigation() {
    navigate(`/admin/ballots/${id}/voters/create`);
  }
  return (
    <div className="flex  poppins-bold w-full justify-between items-center  mt-5 mb-2  p-1 ">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Voters</div>
          <div class="stat-value">{size < 10 ? `0${size}` : size}</div>
        </div>
      </div>

      <button class="icon-btn add-btn" onClick={handleNavigation}>
        <div class="add-icon"></div>
        <div class="btn-txt">Add Voters</div>
      </button>
    </div>
  );
}
