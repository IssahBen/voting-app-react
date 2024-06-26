import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBallot() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, setIsLoading, UpdateBallot } = useData();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  async function GetBallot(id) {
    const token = localStorage.getItem("token");
    const email = JSON.parse(localStorage.getItem("user")).email;
    setIsLoading(true);
    try {
      const res = await fetch(`http://10.0.0.121:3000/api/v1/ballots/${id}`, {
        method: "get",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          "X-User-Token": token,
          "X-User-Email": email,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        return "error";
      }
      if (data) {
        setTitle(data.name);
        setDescription(data.description);
        setIsLoading(false);
        return "success";
      }
    } catch {
      alert("there was an error trying to fetch data");
    } finally {
    }
  }
  useEffect(function () {
    GetBallot(id);
  }, []);
  async function handleUpdate(e) {
    e.preventDefault();
    const obj = { ballot: { name: title, description: description } };
    const status = await UpdateBallot(obj, id);
    if (status === "success") {
      navigate("/admin");
    }
  }
  function HandleNavigation() {
    navigate(-1);
  }
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center mt-5 sm:pt-0">
      <div className="text-foreground poppins-bold text-2xl tracking-widest mx-auto flex items-center gap-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
            />
          </svg>
        </div>
        Edit Ballot
      </div>

      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div
          className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
          bis_skin_checked="1"
        ></div>
        <div class="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div class="flex justify-between items-center p-6">
            <h3 class="text-xl font-semibold leading-6 tracking-widest">
              WeVote
            </h3>
            <button class="bbutton" onClick={HandleNavigation}>
              <div class="button-box">
                <span class="button-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span class="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
          <div class="p-6 pt-0 poppins-light">
            <form onSubmit={handleUpdate}>
              <div>
                <div>
                  <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div class="flex justify-between">
                      <label class="text-xs tracking-widest  font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                        Title
                      </label>
                      <div class="absolute right-3 translate-y-2 text-green-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="title"
                      placeholder=""
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      autocomplete="off"
                      class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div>
                  <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div class="flex justify-between">
                      <label class="text-xs font-medium  tracking-widest text-muted-foreground group-focus-within:text-white text-gray-400">
                        Description
                      </label>
                    </div>
                    <div class="flex items-center">
                      <textarea
                        type="textarea"
                        name="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        class="block h-44 w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex items-center justify-center gap-x-2">
                <button
                  class="font-semibold hover:bg-green-700 hover:text-white hover:ring hover:ring-green-700 transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2 tracking-widest"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
