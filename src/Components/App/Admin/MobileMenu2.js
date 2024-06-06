import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../../Context/DataContext";

export default function MobileMenu({ status, setStatus }) {
  const hamburger = useRef(null);
  const mobileMenu = useRef(null);
  const navigate = useNavigate();
  const { destroySession, HandleQuit, currentBallot } = useData();
  async function handleLogout() {
    const status = await destroySession();
    if (status === "success") {
      localStorage.clear();
      HandleQuit();
      navigate("/");
    } else {
      console.log(status);
    }
  }
  function HandleClick() {
    const isOpen = hamburger.current.classList.contains("open");
    if (isOpen) {
      console.log(2);
      hamburger.current.classList.remove("open");
      mobileMenu.current.classList.remove("flex");
      mobileMenu.current.classList.add("hidden");
    } else {
      hamburger.current.classList.add("open");
      mobileMenu.current.classList.add("flex");
      mobileMenu.current.classList.remove("hidden");
    }
  }
  return (
    <div className="md:hidden z-10">
      <button
        id="menu-btn"
        type="button"
        ref={hamburger}
        className="  z-40 block hamburger md:hidden focus:outline-none"
        onClick={HandleClick}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div
        id="menu"
        ref={mobileMenu}
        className="absolute top-0  poppins-regular tracking-tighter right-0 hidden flex-col z-4  w-1/2 h-62 py-1 pt-10 pl-24 space-y-2 text-lg text-marine_blue uppercase bg-white"
      >
        <NavLink
          to="/admin"
          onClick={() => HandleClick()}
          className={`hover:text-pink-500 hover:shake  btn `}
        >
          Ballots
        </NavLink>
        {currentBallot.name && (
          <NavLink
            to={`/admin/ballots/${currentBallot.id}/voters`}
            onClick={() => HandleClick()}
            className={`hover:text-pink-500 hover:shake  btn `}
          >
            Voters
          </NavLink>
        )}
        {currentBallot.name && (
          <NavLink
            to={`/admin/ballots/${currentBallot.id}/candidates`}
            onClick={() => HandleClick()}
            className={`hover:text-pink-500 hover:shake  btn `}
          >
            Candidates
          </NavLink>
        )}
        <NavLink
          to={`/admin/ballots/profile`}
          onClick={() => HandleClick()}
          className={`hover:text-pink-500 hover:shake  btn `}
        >
          Edit Profile
        </NavLink>
        <a
          onClick={handleLogout}
          className={`hover:text-pink-500 hover:shake   btn  hover:cursor-pointer`}
        >
          Logout
        </a>
      </div>
    </div>
  );
}
