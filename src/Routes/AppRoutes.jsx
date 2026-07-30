import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import UploadResume from "../pages/UploadResume";
import Profile from "../pages/Profile";
import AnalyzeResume from "../pages/AnalyzeResume";
import ViewAnalysis from "../pages/ViewAnalysis";

import ProtectedRoute from "../components/auth/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/upload"
        element={
          <ProtectedRoute>
            <UploadResume />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analyze/:resumeId"
        element={
          <ProtectedRoute>
            <AnalyzeResume />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analysis/:resumeId"
        element={
          <ProtectedRoute>
            <ViewAnalysis />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;