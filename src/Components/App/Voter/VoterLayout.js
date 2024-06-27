import { Outlet } from "react-router-dom";
import Navbar from "../../Home/Navbar";
import { useData } from "../../../Context/DataContext";
import { Alert } from "flowbite-react";
import Info from "../Messages/Info";
import Success from "../Messages/Success";

function VoterLayout() {
  const {
    successMessage,

    infoMessage,
    setInfoMessage,
    setSuccessMessage,
  } = useData();
  return (
    <div className="w-screen   h-screen overflow-y-auto flex flex-col  admin ">
      <Navbar />
      <Info infoMessage={infoMessage} setInfoMessage={setInfoMessage} />
      <Success
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <Outlet />
    </div>
  );
}

export default VoterLayout;
