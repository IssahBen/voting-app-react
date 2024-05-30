function Intro({ setStatus }) {
  return (
    <div class=" mt-24 dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 bounce1 text-4xl  text-blue-900 font-serif font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white">
          Welcome To WeVote
        </h1>
        <p class="mb-8 text-lg font-normal poppins-medium text-slate-950 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          WeVote is a cutting-edge voting app designed to streamline and secure
          the voting process for elections, polls, and organizational decisions.
          With WeVote, participating in democracy has never been easier or more
          secure.
        </p>
        <div class="flex justify-center ">
          <button
            className="rounded-lg poppins-bold py-3 px-5 font-medium text-center button-85"
            onClick={() => setStatus("signup")}
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
