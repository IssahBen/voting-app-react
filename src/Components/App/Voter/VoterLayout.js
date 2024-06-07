import { Outlet } from "react-router-dom";
import Navbar from "../../Home/Navbar";

function VoterLayout() {
  return (
    <div className="w-screen   h-screen overflow-y-auto flex flex-col  admin ">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default VoterLayout;
