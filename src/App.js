import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import { DataProvider } from "./Context/DataContext";
import AppLayout from "./Components/App/AppLayout";
import Ballots from "./Components/App/Ballots";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="ballots" />} />
            <Route path="ballots" element={<Ballots />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
