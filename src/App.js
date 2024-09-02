import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Matches from "./pages/Matches";
import Match from "./pages/Match";
import Teams from "./pages/Teams";
import Tournaments from "./pages/Tournaments";
import Tournament from "./pages/Tournament";
import Players from "./pages/Players";
import Player from "./pages/Player";


function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<DefaultContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

function DefaultContainer({ loader }) {
  const user = true;






  return (
    <div className="w-[100vw] h-[100%] flex items-center  overflow-x-hidden">
      <Sidebar />
      <div className="w-[80vw] h-[100vh] bg-[#434343] flex flex-col main overflow-hidden p-[2rem] gap-[1rem]">
        <Header />
        <div className="w-[100%] h-[90vh] overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/matches" />} />
            <Route path="/matches" element={<Matches page={"matches"}/>} />
            <Route path="/match/:id" element={<Match page={"match"}/>} />
            <Route path="/teams" element={<Teams page={"teams"}/>} />
            <Route path="/tournaments" element={<Tournaments page={"tournaments"}/>} />
            <Route path="/tournament/:id" element={<Tournament page={"tournaments"}/>} />
            <Route path="/players" element={<Players page={"players"}/>} />
            <Route path="/player/:id" element={<Player page={"player"}/>} />

            <Route path="*" element={<Navigate to="/matches" />} />
          </Routes>  
        </div>
      </div>
    </div>
  );
}

export default App;
