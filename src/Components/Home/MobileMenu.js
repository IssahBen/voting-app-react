import { useRef } from "react";
import { useData } from "../../Context/DataContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function MobileMenu({ status, setStatus }) {
  const hamburger = useRef(null);
  const mobileMenu = useRef(null);

  const navigate = useNavigate();
  const { destroySession, HandleQuit, loggedIn } = useData();
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
        {loggedIn ? (
          ""
        ) : (
          <a
            href="#home"
            onClick={(e) => setStatus("login")}
            className={`${
              status === "login" ? "hidden " : ""
            }hover:text-pink-500 hover:shake font-mono btn tracking-widest`}
          >
            Sign in
          </a>
        )}
        {loggedIn ? (
          <NavLink
            to="admin"
            className={`hover:text-pink-500 hover:shake font-mono btn tracking-widest`}
          >
            Admin
          </NavLink>
        ) : (
          <a
            href="#about"
            onClick={(e) => setStatus("signup")}
            className={`${
              status === "signup" ? "hidden " : ""
            }hover:text-pink-500 hover:shake font-mono btn tracking-widest`}
          >
            Register
          </a>
        )}
        {loggedIn ? (
          <a
            onClick={handleLogout}
            className={`hover:text-pink-500 hover:shake  font-mono btn tracking-widest hover:cursor-pointer`}
          >
            Logout
          </a>
        ) : (
          <a
            href="#projects"
            onClick={(e) => setStatus("validate")}
            className={`${
              status === "validationg" ? "hidden " : ""
            }hover:text-pink-500 hover:shake  font-mono btn tracking-widest`}
          >
            Check ELigibility?
          </a>
        )}
      </div>
    </div>
  );
}