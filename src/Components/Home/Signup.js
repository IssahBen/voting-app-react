import { useState } from "react";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";
function Signup({ setStatus }) {
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const navigate = useNavigate();
  const {
    email,
    password,
    setEmail,
    setPassword,
    role,
    setRole,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    createUser,
  } = useData();
  async function handleSignUp(e) {
    e.preventDefault();
    const obj = {
      user: {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        first_name: firstName,
        last_name: lastName,
        role: role,
      },
    };
    console.log(obj);
    const status = await createUser(obj);
    console.log(status);
    console.log(role);

    if (status === "voter") navigate("/voter");
    if (status === "official") navigate("/admin");
  }
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="px-10 flex w-full md:mx-24 opacity-80 lg:w-1/2 justify-center items-center s bg-white rounded-[8px]">
        <div className="relative flex items-center">
          <div className="w-full z-10">
            <div className="text-center">
              <h2 className=" pulse mt-6 text-3xl font-bold text-gray-900">
                Sign Up Now
              </h2>
            </div>
            <form className="mt-5 space-y-4" onSubmit={handleSignUp}>
              <input type="hidden" name="remember" value="true" />
              <div className="relative">
                <div className="absolute right-0 mt-2">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                  className="w-full text-base py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="email"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="mt-2 content-center">
                <label className="text-sm  pulse font-bold text-gray-700 tracking-wide">
                  First Name
                </label>
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full content-center text-base py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="mt-2 content-center">
                <label className="text-sm  pulse font-bold text-gray-700 tracking-wide">
                  Last Name
                </label>
                <input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full content-center text-base py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="mt-2 content-center">
                <label className="text-sm  pulse font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full content-center text-base py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-2 content-center">
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
                  className="w-full content-center text-base py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
              <div className="mt-2 content-center">
                <label className="text-sm  pulse font-bold tracking-wide">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="  divide-y w-full content-center text-base py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
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
                  className={`w-full  flip flex justify-center   ${
                    email && password === passwordConfirmation
                      ? "bg-green-500 "
                      : "bg-red-700 "
                  } text-gray-100 p-1 mb-5  rounded-xl tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600  cursor-pointer transition ease-in duration-300`}
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
              className=" gelatine shake text-2xl text-green-500 font-bold tracking-wide hover:text-indigo-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
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
