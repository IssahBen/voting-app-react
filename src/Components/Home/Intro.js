function Intro({ setStatus }) {
  return (
    <div className="flex flex-col items-center p-8 space-y-10 mt-24">
      <div className="flex md:justify-start justify-center py-2  opacity-80   font-extrabold text-4xl  text-black ">
        <div className="bg-white py-2 px-5 shadow   border-[5px]  border-black rounded-lg">
          <h1>Welcome To WeVote</h1>
        </div>
      </div>
      <div className="flex space-x-5 ">
        <button
          className="rounded-3xl bounce1 shadow bg-yellow-600 px-5 py-2"
          onClick={() => setStatus("signup")}
        >
          Sign Up To Vote
        </button>
        <button
          className="rounded-3xl bounce1 shadow bg-yellow-600 px-5 py-2"
          onClick={() => setStatus("signup")}
        >
          Sign Up To Create Ballots
        </button>
      </div>
    </div>
  );
}

export default Intro;
