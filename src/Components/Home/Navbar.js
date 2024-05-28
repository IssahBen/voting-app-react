import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DesktopMenu2 from "../App/Admin/DesktopMenu2";
import MobileMenu2 from "../App/Admin/MobileMenu2";

function Navbar({ status, setStatus }) {
  return (
    <div className="flex w-full  bg-white justify-between border-b-2 border-blue-950 items-center px-5 py-2">
      <h1
        className="font-bold text-4xl   text-blue-950 hover:cursor-pointer"
        onClick={() => setStatus("home")}
      >
        WeVote
      </h1>
      <DesktopMenu status={status} setStatus={setStatus} />
      <MobileMenu status={status} setStatus={setStatus} />
    </div>
  );
}

export default Navbar;
