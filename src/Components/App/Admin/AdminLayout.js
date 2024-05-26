import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import Navbar from "./Navbar2";
function AdminLayout() {
  const { loggedIn, setEmail, setFirstName, setLastName, setRole, setToken } =
    useData();
  const [status, setStatus] = useState("");
  useEffect(function () {
    const token = localStorage.getItem("token");
    const userObj = JSON.parse(localStorage.getItem("user"));
    setToken(token);
    setEmail(userObj.email);
    setRole(userObj.role);
    setFirstName(userObj.first_name);
    setLastName(userObj.last_name);
  }, []);
  return (
    <div className="w-screen h-screen">
      <Navbar status={status} setStatus={setStatus} />
    </div>
  );
}

export default AdminLayout;
