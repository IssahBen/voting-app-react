import { useState } from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Login from "./Login";
import Intro from "./Intro";
import Signup from "./Signup";
import Error from "../App/Messages/Error";
import { useData } from "../../Context/DataContext";

function Home() {
  const [status, setStatus] = useState("home");
  const { errorMessage, setErrorMessage } = useData();
  return (
    <div className=" relative w-screen  h-screen overflow-y-auto bg-blue-500 flex flex-col home bg-no-repeat bg-cover">
      <main className="w-full h-full   mb-52">
        <Navbar setStatus={setStatus} status={status} />
        <Error errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        {status === "home" ? <Intro setStatus={setStatus} /> : ""}
        {status === "login" ? <Login setStatus={setStatus} /> : ""}
        <div className="w-full h-full">
          {" "}
          {status === "signup" ? <Signup setStatus={setStatus} /> : ""}
        </div>
      </main>

      <footer className=" fixed z-20 bottom-0 left-0 w-full opacity-100 mt-10">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
