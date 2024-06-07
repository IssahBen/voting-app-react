import { useData } from "../../Context/DataContext";
import Greeting from "../App/Admin/Greeting";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar({ status, setStatus }) {
  const { loggedIn } = useData();
  return (
    <div className="flex w-full  bg-white justify-between  items-center px-5 py-2">
      <h1
        className="font-bold text-4xl poppins-extrabold   text-blue-950 hover:cursor-pointer"
        onClick={() => setStatus("home")}
      >
        WeVote
      </h1>
      {loggedIn ? <Greeting /> : ""}
      <DesktopMenu status={status} setStatus={setStatus} />
      <MobileMenu status={status} setStatus={setStatus} />
    </div>
  );
}

export default Navbar;
