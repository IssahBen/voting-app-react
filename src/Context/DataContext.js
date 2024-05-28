import { createContext, useContext, useEffect, useState } from "react";
import {} from "react-router-dom";

const DataContext = createContext();

function DataProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loggedIn = token === "" ? false : true;
  useEffect(function () {
    if(localStorage.getItem("token") && localStorage.getItem("user")){
    const token = localStorage.getItem("token");
    const userObj = JSON.parse(localStorage.getItem("user"));
    setToken(token);
    setEmail(userObj.email);
    setRole(userObj.role);
    setFirstName(userObj.first_name);
    setLastName(userObj.last_name);}
  }, []);
  async function createUser(obj) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://10.0.0.121:3000/api/v1/signup`, {
        method: "Post",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        return data.user.role;
      } else {
        alert(data.message);
        return "error";
      }
    } catch {
      alert("there was an error loading data..");
      return "error";
    } finally {
      setIsLoading(false);
    }
  }
  async function destroySession() {
    try {
      const res = await fetch(`http://10.0.0.121:3000/api/v1/logout`, {
        method: "delete",
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
      if (data.message) {
        return "success";
      }
    } catch {
      alert("there was an error Quit");
    } finally {
    }
  }
  async function CreateBallot(obj) {
    try {
      const res = await fetch(`http://10.0.0.121:3000/api/v1/ballots`, {
        method: "post",
        body: JSON.stringify(obj),
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
      if (data.message) {
        console.log(data.message)
        return "success";
      }
      if(data.errors){
        alert(data.errors)
      }
    } catch {
      alert("there was an error Quit");
    } finally {
    }
  }
  function HandleQuit() {
    setEmail("");
    setPassword("");
    setToken("");
    setFirstName("");
    setLastName("");
    setRole("");
  }
  async function Login(obj) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://10.0.0.121:3000/api/v1/login`, {
        method: "Post",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        return data.user.role;
      } else {
        alert(data.message);
        return "error";
      }
    } catch {
      alert("there was an error loading data..");
      return "error";
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DataContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        role,
        setRole,
        token,
        setToken,
        firstName,
        lastName,
        setFirstName,
        setLastName,
        createUser,
        loggedIn,
        Login,
        destroySession,
        HandleQuit,
        CreateBallot
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("CiiesContext was used outside the provider");
  return context;
}

export { useData, DataProvider };
