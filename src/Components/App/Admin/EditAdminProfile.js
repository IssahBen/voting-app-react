import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import { useNavigate } from "react-router-dom";

export default function EditAdminProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const { UpdateUser } = useData();
  const navigate = useNavigate();
  useEffect(function () {
    setEmail(JSON.parse(localStorage.getItem("user")).email);
    setFirstName(JSON.parse(localStorage.getItem("user")).first_name);
    setLastName(JSON.parse(localStorage.getItem("user")).last_name);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (currentPassword === "") {
      alert("Current Password can't be empty");
      return;
    } else {
      let formData = new FormData();
      formData.append("user[email]", email);
      formData.append("user[first_name]", firstName);
      formData.append("user[last_name]", lastName);
      formData.append("user[current_password]", currentPassword);
      formData.append("user[new_password]", newPassword);

      const status = await UpdateUser(formData);
      if (status === "success") {
        alert("User details Updated");
        navigate("/admin/ballots");
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full justify-center items-center text-xl poppins-bold mb-5 mt-5 text-gray-700">
        <p>Edit Profile</p>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setLastName(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Current Password
        </label>
        <input
          type="password"
          id="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          New Password
        </label>
        <input
          type="password"
          id="confirm_password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="•••••••••"
        />
      </div>
      <div class="flex items-start mb-6">
        <label
          for="remember"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          There will be updates without the current password
        </label>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
