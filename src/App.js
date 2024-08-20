import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/Register";


function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<DefaultContainer />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

// function DefaultContainer({ loader }) {
//   return (
//     <div className="w-[100vw] h-[100%] flex items-center  overflow-x-hidden">
//       <Sidebar />
//       <div className="w-[93vw] h-[100vh]  flex flex-col main overflow-hidden">
//         <Header />
//         <div className="w-[100%] h-[90vh] overflow-auto">
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={user ? <Dashboard /> : <Navigate to="/" />}
//             />
            
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
