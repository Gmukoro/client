// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/sidebar";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import ProfilePage from "./pages/ProfilePage";
// import SpirePage from "./pages/SpirePage";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="flex h-screen">
//         <Sidebar />
//         {/* <div className="flex flex-col flex-1"> */}
//         <div className="flex flex-1 overflow-y-auto">
//           <div className="w-full p-4">
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/register" element={<RegisterPage />} />
//               <Route path="/profile" element={<ProfilePage />} />
//               <Route path="/create-spire" element={<SpirePage />} />
//             </Routes>
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </Router>
//   );
// };

// export default App;

// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SpirePage from "./pages/SpirePage";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 overflow-y-auto w-full p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-spire" element={<SpirePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
