import { NavLink } from "react-router-dom";
import DesktopMenu from "./DesktopMenu2";
import MobileMenu from "./MobileMenu2";

function Navbar({ status, setStatus }) {
  return (
    <div className="flex w-full  bg-white justify-between  items-center px-5 py-2">
      <NavLink
        to="/"
        className="font-bold text-4xl gelatine  text-yellow-600 hover:cursor-pointer"
      >
        WeVote
      </NavLink>
      <DesktopMenu status={status} setStatus={setStatus} />
      <MobileMenu status={status} setStatus={setStatus} />
    </div>
  );
}

export default Navbar;