import { useState } from "react";
import { useData } from "../../Context/DataContext";
function Signup({ setStatus }) {
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const { email, password, setEmail, setPassword, role, setRole } = useData();
  function handleSignUp() {}
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="px-10 flex w-full lg:w-1/2 justify-center items-center shadow bg-white rounded-[8px]">
        <div className="relative flex items-center">
          <div className="w-full z-10">
            <div className="text-center">
              <h2 className=" pulse mt-6 text-3xl font-bold text-gray-900">
                Sign Up Now
              </h2>
              <p className="mt-5 text-md text-gray-600">
                Voter/Election Official
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
              <input type="hidden" name="remember" value="true" />
              <div className="relative">
                <div className="absolute right-0 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      email && password === passwordConfirmation
                        ? "text-green-500"
                        : "text-red-500"
                    } spin`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <label className=" text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="email"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="mt-8 content-center">
                <label className="text-sm  pulse font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-8 content-center">
                <label
                  className={`text-sm  pulse font-bold ${
                    password !== passwordConfirmation
                      ? "text-red-500 "
                      : "text-green-700 "
                  } tracking-wide`}
                >
                  Password Confirmatiom
                </label>
                <input
                  required
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
              <div className="mt-8 content-center">
                <label className="text-sm  pulse font-bold tracking-wide">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="  divide-y w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                >
                  <option value="voter">Voter</option>
                  <option value="official">Election official</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full  flip flex justify-center shadow  ${
                    email && password === passwordConfirmation
                      ? "bg-green-500 "
                      : "bg-red-500 "
                  } text-gray-100 p-1 mb-5  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300`}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <p className="flex ml-5 flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span> Have an account?</span>

            <button
              onClick={() => setStatus("login")}
              className=" gelatine flash text-2xl text-green-500 font-bold tracking-wide hover:text-indigo-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
