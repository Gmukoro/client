import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SpirePage from "./pages/SpirePage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/landingPage";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex h-screen">
        <div className="flex flex-1 overflow-y-auto w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/Get inspired" />} />
            <Route path="/Get inspired" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/home"
              element={
                // <ProtectedRoute>
                <HomePage />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/create-spire"
              element={
                <ProtectedRoute>
                  <SpirePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
