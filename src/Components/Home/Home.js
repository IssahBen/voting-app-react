import { useState } from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Login from "./Login";
import Intro from "./Intro";
import Signup from "./Signup";

function Home() {
  const [status, setStatus] = useState("home");
  return (
    <div className="w-screen h-screen bg-blue-500 flex flex-col home bg-no-repeat bg-cover">
      <Navbar setStatus={setStatus} status={status} />
      {status === "home" ? <Intro setStatus={setStatus} /> : ""}
      {status === "login" ? <Login setStatus={setStatus} /> : ""}
      {status === "signup" ? <Signup setStatus={setStatus} /> : ""}

      <Footer />
    </div>
  );
}

export default Home;
