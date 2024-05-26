import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import { DataProvider } from "./Context/DataContext";
import AdminLayout from "./Components/App/Admin/AdminLayout";
import Ballots from "./Components/App/Admin/Ballots";
import VoterLayout from "./Components/App/Voter/VoterLayout";
import VotingArea from "./Components/App/Voter/VotingArea";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate replace to="ballots" />} />
            <Route path="ballots" element={<Ballots />} />
          </Route>
          <Route path="voter" element={<VoterLayout />}>
            <Route index element={<Navigate replace to="vote" />} />
            <Route path="vote" element={<VotingArea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
