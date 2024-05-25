import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [role, setRole] = useState("voter");

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
