import { NavLink, useNavigate } from "react-router-dom";
import card from "../../../images/bg.jpg";
import { useData } from "../../../Context/DataContext";
import { useRef } from "react";
export default function BallotItem({ ballot, GetBallots }) {
  const navigate = useNavigate();
  const { setCurrentBallot } = useData();
  const modal = useRef(null);

  function handelEdit() {
    navigate(`/admin/ballots/edit/${ballot.id}`);
  }

  return (
    <div class=" relative max-w-sm w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <NavLink
        to={`/admin/ballots/${ballot.id}`}
        onClick={setCurrentBallot(ballot.name)}
      >
        {" "}
        <img className="rounded-t-lg h-72 w-full" src={card} alt="" />
      </NavLink>
      <div class="p-5">
        <NavLink
          to={`/admin/ballots/${ballot.id}`}
          onClick={setCurrentBallot(ballot.name)}
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
            {ballot.name}
          </h5>
        </NavLink>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {ballot.description}
        </p>
        <button
          onClick={handelEdit}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 tracking-widest"
        >
          Edit
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            modal.current.classList.remove("hidden");
          }}
          class="  border-l-2  border-b-2 border-gray-950 absolute top-[10px] gelatine right-[10px] ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
        >
          <svg
            className="   scale-10 text-red-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <Modal modal={modal} id={ballot.id} />
      </div>
    </div>
  );

  function Modal({ modal, id }) {
    const { destroyBallot } = useData();
    async function handleDelete(id) {
      const status = await destroyBallot(id);
      if (status === "success") {
        modal.current.classList.add("hidden");
        navigate("/admin");
      }
    }

    function Close() {
      modal.current.classList.add("hidden");
    }
    return (
      <div
        ref={modal}
        id="popup-modal"
        tabindex="-1"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={Close}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              <svg
                class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this Ballot?
              </h3>
              <button
                data-modal-hide="popup-modal"
                onClick={() => handleDelete(id)}
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={Close}
                data-modal-hide="popup-modal"
                type="button"
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
