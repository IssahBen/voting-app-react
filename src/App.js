import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import { DataProvider } from "./Context/DataContext";
import AdminLayout from "./Components/App/Admin/AdminLayout";
import Ballots from "./Components/App/Admin/Ballots";
import VoterLayout from "./Components/App/Voter/VoterLayout";
import VotingArea from "./Components/App/Voter/VotingArea";
import CreateBallot from "./Components/App/Admin/CreateBallot";
import ShowBallot from "./Components/App/Admin/ShowBallot";
import EditBallot from "./Components/App/Admin/EditBallot";
import EditCandidate from "./Components/App/Admin/EditCandidate";
import CreateCandidate from "./Components/App/Admin/CreateCandidate";
import Voters from "./Components/App/Admin/Voters";
import CreateVoter from "./Components/App/Admin/CreateVoter";
import EditVoter from "./Components/App/Admin/EditVoter";
import EditAdminProfile from "./Components/App/Admin/EditAdminProfile";
import ProtectedRoute from "./Components/Home/ProtectedRoute";
import PageNotFound from "./Components/App/Messages/PageNotFound";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="ballots" />} />
            <Route path="ballots" element={<Ballots />} />
            <Route path="ballots/:id" element={<ShowBallot />} />
            <Route path="ballots/edit/:id" element={<EditBallot />} />
            <Route
              path="ballots/:id/candidates/:cid"
              element={<EditCandidate />}
            />
            <Route path="ballots/create" element={<CreateBallot />} />
            <Route path="ballots/:id/create" element={<CreateCandidate />} />
            <Route path="ballots/:id/voters" element={<Voters />} />
            <Route path="ballots/:id/voters/create" element={<CreateVoter />} />
            <Route path="ballots/:id/voters/:vid" element={<EditVoter />} />
            <Route path="ballots/profile" element={<EditAdminProfile />} />
          </Route>
          <Route
            path="voter"
            element={
              <ProtectedRoute>
                <VoterLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="vote" />} />
            <Route path="vote" element={<VotingArea />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
