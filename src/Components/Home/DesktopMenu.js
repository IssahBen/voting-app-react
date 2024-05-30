import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../Context/DataContext";

export default function DesktopMenu({ status, setStatus }) {
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
  return (
    <div className="hidden h-10 poppins-medium tracking-tighter font-bold md:flex md:space-x-8">
      <div className="group hover:btn">
        {loggedIn ? (
          ""
        ) : (
          <a
            href="#home"
            className={` hover:text-pink-500 `}
            onClick={(e) => setStatus("login")}
          >
            Sign in
          </a>
        )}
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake"></div>
      </div>
      <div className="group hover:btn">
        {loggedIn ? (
          <NavLink to="admin" className={`hover:text-pink-500 `}>
            Admin
          </NavLink>
        ) : (
          <a
            href="#about"
            className={` hover:text-pink-500 `}
            onClick={(e) => setStatus("signup")}
          >
            Register
          </a>
        )}
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake"></div>
      </div>
      <div className="group hover:btn">
        {loggedIn ? (
          <a
            href="#b"
            onClick={handleLogout}
            className={`hover:text-pink-500 `}
          >
            logout
          </a>
        ) : (
          <a
            href="#projects"
            className={`hover:text-pink-500 `}
            onClick={(e) => setStatus("validate")}
          >
            Check ELigibility
          </a>
        )}
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake "></div>
      </div>
    </div>
  );
}
