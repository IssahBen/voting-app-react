import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import Navbar from "./Navbar2";
import { Outlet } from "react-router-dom";
import Greeting from "./Greeting";
import Info from "../Messages/Info";
import Success from "../Messages/Success";
import Error from "../Messages/Error";
function AdminLayout() {
  const {
    loggedIn,
    setEmail,
    setFirstName,
    setLastName,
    setRole,
    setToken,
    successMessage,
    errorMessage,
    infoMessage,
    setInfoMessage,
    setSuccessMessage,
    setErrorMessage,
  } = useData();

  const [status, setStatus] = useState("");
  useEffect(function () {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      const token = localStorage.getItem("token");
      const userObj = JSON.parse(localStorage.getItem("user"));
      setToken(token);
      setEmail(userObj.email);
      setRole(userObj.role);
      setFirstName(userObj.first_name);
      setLastName(userObj.last_name);
    }
  }, []);
  return (
    <div className="w-screen   h-screen overflow-y-auto flex flex-col  admin ">
      <Navbar status={status} setStatus={setStatus} />
      <Info infoMessage={infoMessage} setInfoMessage={setInfoMessage} />
      <Success
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <Error errorMessage={errorMessage} setErrorMessage={setErrorMessage} />

      <Outlet />
    </div>
  );
}

export default AdminLayout;
