import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../../Context/DataContext";
export default function DesktopMenu({ status, setStatus }) {
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

  return (
    <div className="hidden h-10 font-serif font-bold md:flex md:space-x-8">
      <div className="group hover:btn">
        <NavLink to="/admin" className={`hover:text-pink-500 `}>
          Ballots
        </NavLink>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake"></div>
      </div>
     
      <div className="group hover:btn">
        <a onClick={handleLogout} className={`hover:text-pink-500 `}>
          logout
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake "></div>
      </div>
    </div>
  );
}
