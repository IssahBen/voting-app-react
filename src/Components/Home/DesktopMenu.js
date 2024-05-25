export default function DesktopMenu({ status, setStatus }) {
  return (
    <div className="hidden h-10 font-serif font-bold md:flex md:space-x-8">
      <div className="group hover:btn">
        <a
          href="#home"
          className={`${
            status === "login" ? "hidden " : ""
          } hover:text-pink-500 `}
          onClick={(e) => setStatus("login")}
        >
          Sign in
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake"></div>
      </div>
      <div className="group hover:btn">
        <a
          href="#about"
          className={`${
            status === "signup" ? "hidden " : ""
          } hover:text-pink-500 `}
          onClick={(e) => setStatus("signup")}
        >
          Register
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake"></div>
      </div>
      <div className="group hover:btn">
        <a
          href="#projects"
          className={`${
            status === "validating " ? "hidden " : ""
          }hover:text-pink-500 `}
          onClick={(e) => setStatus("validate")}
        >
          Check ELigibility
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover:shake "></div>
      </div>
    </div>
  );
}
