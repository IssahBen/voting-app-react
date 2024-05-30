import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/DataContext";
function Login({ setStatus }) {
  const { email, password, setEmail, setPassword, Login } = useData();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const obj = {
      user: {
        email: email,
        password: password,
      },
    };
    const status = await Login(obj);
    console.log(status);

    if (status === "voter") navigate("/voter");
    if (status === "official") navigate("/admin");
  }
  return (
    <div className="flex w-full h-full justify-center items-center ">
      <div className="px-10 flex w-full  h-full md:mx-24 lg:w-1/2 justify-center items-center  bg-white rounded-[8px]">
        <div className="relative flex items-center">
          <div className="w-full z-10">
            <div className="text-center">
              <h2 className=" pulse mt-6 text-3xl poppins-extrabold font-bold text-gray-900">
                Welcome Back👋
              </h2>
            </div>
            <form className="mt-8 space-y-6 " onSubmit={handleLogin}>
              <input type="hidden" name="remember" value="true" />
              <div className=" poppins-light">
                <label className=" text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full  rounded-lg text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="email"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="mt-8 content-center poppins-light">
                <label className="text-sm  pulse font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
              </div>
              <div>
                <button type="submit" class="button">
                  <div class="button-top">Login</div>
                  <div class="button-bottom"></div>
                  <div class="button-base"></div>
                </button>
              </div>
            </form>
          </div>
          <div className=" flex ml-2 flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span className="poppins-light">Don't have an account?</span>
            <button
              className=" poppins-medium gelatine text-red-500 hover:text-indigo-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
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
