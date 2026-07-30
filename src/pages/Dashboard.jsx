import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, LogOut } from "lucide-react";
import { logout } from "../utils/auth";

import DashboardHeader from "../dashboard/DashboardHeader";
import StatsCards from "../dashboard/StatsCards";
import ResumeCard from "../dashboard/ResumeCard";

import {
  getAllResumes,
  deleteResumeById,
  viewResume,
} from "../services/resumeService";

function Dashboard() {
  const navigate = useNavigate();

  const [resumes, setResumes] = useState([]);

  const userEmail = localStorage.getItem("userEmail");

  // Fetch resumes
  const fetchResumes = async () => {
    try {
      const data = await getAllResumes();

      const formattedResumes = data.map((resume) => ({
        id: resume.id,
        name: resume.fileName,
        uploadDate: new Date(resume.uploadDate).toLocaleDateString(),
        status: resume.status || "PENDING",
        score: resume.aiScore ?? "--",
      }));

      setResumes(formattedResumes);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Resume
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      await deleteResumeById(id);
      await fetchResumes();

      alert("Resume deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete resume.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

if (!token) {
  navigate("/login");
  return;
}

    fetchResumes();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-purple-600">
            ResumeAI
          </h1>

          <div className="flex items-center gap-6">

            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition"
            >
              <User size={19} />
              Profile
            </button>

            <button
  onClick={() => {
    logout();
    navigate("/", { replace: true });
  }}
  className="flex items-center gap-2 text-red-600 hover:text-red-700 transition"
>
  <LogOut size={19} />
  Logout
</button>

          </div>

        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">

        {/* Welcome */}
        <DashboardHeader
          userEmail={userEmail}
          onUpload={() => navigate("/upload")}
        />

        {/* Stats */}
        <div className="mt-6">
          <StatsCards resumes={resumes} />
        </div>

        {/* Resume Section */}
        <div className="mt-8">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-semibold text-gray-900">
              My Resumes
            </h2>

            <span className="text-sm text-gray-500">
              {resumes.length} Resume{resumes.length !== 1 ? "s" : ""}
            </span>

          </div>

          {resumes.length === 0 ? (

            <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">

              <h3 className="text-lg font-semibold text-gray-800">
                No resumes uploaded yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Upload your first resume and start analyzing it with AI.
              </p>

              <button
                onClick={() => navigate("/upload")}
                className="mt-6 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition"
              >
                Upload Resume
              </button>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {resumes.map((resume) => (

                <ResumeCard
                  key={resume.id}
                  resume={resume}
                  onView={() => viewResume(resume.id)}
                  onViewAnalysis={() =>
                    navigate(`/analysis/${resume.id}`)
                  }
                  onAnalyze={() =>
                    navigate(`/analyze/${resume.id}`)
                  }
                  onDelete={() => handleDelete(resume.id)}
                />

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;