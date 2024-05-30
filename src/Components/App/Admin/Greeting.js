import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";

export default function Greeting() {
  const [hour, setHour] = useState(0);
  const { firstName } = useData();

  useEffect(function () {
    let now = new Date();
    const hour = now.getHours();
    setHour(Number(hour));
  }, []);
  return (
    <div className="flex tracking-tighter justify-center items-center w-full  ml-5 px-5 ">
      <div className="flex  justify-start items-center gap-0">
        <p className=" poppins-light text-lg text-black font-bold ">
          Good{" "}
          {hour < 12
            ? "Morning"
            : hour >= 12 && hour < 16
            ? "Afternoon,"
            : "Evening,"}{" "}
          {firstName}
        </p>
      </div>
    </div>
  );
}
