function Intro({ setStatus }) {
  return (
    <div className="flex flex-col items-center p-8 space-y-10 mt-24">
      <div className="lg:mx-52 flex md:justify-start  justify-center py-2    ">
        <div className=" flex  flex-col items-center py-5 px-8 bg-white opacity-75     rounded-lg">
          <h1 className="gelatine   font-extrabold text-5xl  text-black">
            Welcome To WeVote
          </h1>
          <p className="tracking-wide mt-2 text-center   text-md md:w-1/2">
            WeVote is a cutting-edge voting app designed to streamline and
            secure the voting process for elections, polls, and organizational
            decisions. With WeVote, participating in democracy has never been
            easier or more secure.
          </p>
        </div>
      </div>
      <div className="flex space-x-5 ">
        <button
          className="rounded-lg bounce1  bg-red-700 px-5 py-2"
          onClick={() => setStatus("signup")}
        >
          Sign Up To Vote
        </button>
        <button
          className="rounded-lg bounce1  bg-red-700 px-5 py-2"
          onClick={() => setStatus("signup")}
        >
          Sign Up To Create Ballots
        </button>
      </div>
    </div>
  );
}

export default Intro;
