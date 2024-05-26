import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../../Context/DataContext";

export default function MobileMenu({ status, setStatus }) {
  const hamburger = useRef(null);
  const mobileMenu = useRef(null);
  const navigate = useNavigate();
  const { destroySession, HandleQuit } = useData();
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
    let isOpen = hamburger.current.classList.contains("open");
    if (isOpen) {
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
    <div className="md:hidden">
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
        className="absolute top-0 right-0 hidden flex-col z-4  w-1/2 h-72 py-1 pt-10 pl-24 space-y-2 text-lg text-marine_blue uppercase bg-white"
      >
        <NavLink
          to="admin"
          className={`hover:text-pink-500 hover:shake font-mono btn tracking-widest`}
        >
          Ballots
        </NavLink>
        <NavLink
          href="#about"
          className={`hover:text-pink-500 hover:shake font-mono btn tracking-widest`}
        >
          Create Ballot
        </NavLink>
        <a
          onClick={handleLogout}
          className={`hover:text-pink-500 hover:shake  font-mono btn tracking-widest hover:cursor-pointer`}
        >
          Logout
        </a>
      </div>
    </div>
  );
}