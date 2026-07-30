import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { getAnalysis } from "../services/analysisService";
import AnalysisResult from "../components/analysis/AnalysisResult";

function ViewAnalysis() {
  const navigate = useNavigate();
  const { resumeId } = useParams();

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const data = await getAnalysis(resumeId);
        setAnalysis(data);
      } catch (err) {
        console.error("Failed to load analysis:", err);
        setError("Failed to load analysis.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [resumeId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">Loading analysis...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-purple-600"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Header */}
        <div className="mb-5 rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-sm">

          <h1 className="text-2xl font-bold text-gray-900">
            Resume Analysis
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Previously saved AI analysis for this resume.
          </p>

        </div>

        <AnalysisResult analysis={analysis} />

      </div>
    </div>
  );
}

export default ViewAnalysis;