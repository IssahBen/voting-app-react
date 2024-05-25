import { useData } from "../../Context/DataContext";
function Login({ setStatus }) {
  const { email, password, setEmail, setPassword } = useData();
  function handleLogin() {}
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="px-10 flex w-full lg:w-1/2 justify-center items-center shadow bg-white rounded-[8px]">
        <div className="relative flex items-center">
          <div className="w-full z-10">
            <div className="text-center">
              <h2 className=" pulse mt-6 text-3xl font-bold text-gray-900">
                Welcome Back!
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <input type="hidden" name="remember" value="true" />
              <div className="relative">
                <div className="absolute right-0 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 spin"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full  flip flex justify-center shadow  bg-red-500 text-gray-100 p-1 mb-5  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="flex ml-2 flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <button
              className="gelatine text-red-500 hover:text-indigo-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
              onClick={() => setStatus("signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
