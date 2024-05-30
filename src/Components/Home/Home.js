import { useState } from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Login from "./Login";
import Intro from "./Intro";
import Signup from "./Signup";

function Home() {
  const [status, setStatus] = useState("home");

  return (
    <div className=" relative w-screen  h-screen overflow-y-auto bg-blue-500 flex flex-col home bg-no-repeat bg-cover">
      <main className="w-full h-full   mb-52">
        <Navbar setStatus={setStatus} status={status} />
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
