import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/DataContext";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { loggedIn, setErrorMessage } = useData();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!loggedIn) {
        setErrorMessage("Login or SignUp");
        navigate("/");
      }
    },
    [loggedIn, navigate, setErrorMessage]
  );
  return loggedIn ? children : null;
}
