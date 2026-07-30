import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

import { analyzeResume } from "../services/resumeService";
import AnalysisResult from "../components/analysis/AnalysisResult";

function AnalyzeResume() {
  const navigate = useNavigate();
  const { resumeId } = useParams();

  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      alert("Please enter the Job Description.");
      return;
    }

    try {
      setLoading(true);

      const response = await analyzeResume(
        Number(resumeId),
        jobDescription
      );

      setAnalysis(response);
    } catch (error) {
      console.error(error);
      alert("Failed to analyze resume.");
    } finally {
      setLoading(false);
    }
  };

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
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="flex items-center gap-2">
                <Sparkles
                  size={20}
                  className="text-purple-600"
                />

                <h1 className="text-2xl font-bold text-gray-900">
                  AI Resume Analysis
                </h1>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Compare your resume with a job description and receive
                AI-powered ATS insights.
              </p>
            </div>

            <div className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
              Resume #{resumeId}
            </div>

          </div>
        </div>

        {/* Job Description */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-900">
            Job Description
          </h2>

          <p className="mt-1 mb-4 text-sm text-gray-500">
            Paste the complete job description below for AI analysis.
          </p>

          <textarea
            rows={6}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the complete job description here..."
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-4 ml-auto inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-purple-700 hover:shadow-md disabled:opacity-60"
          >
            {loading ? (
              "Analyzing Resume..."
            ) : (
              <>
                <Sparkles size={18} />
                Analyze Resume
              </>
            )}
          </button>

        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-5 rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm">

            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>

            <h2 className="mt-5 text-lg font-semibold text-gray-900">
              AI is analyzing your resume...
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Matching skills, calculating ATS score and generating suggestions.
            </p>

          </div>
        )}

        {/* Analysis Result */}
        {analysis && (
          <AnalysisResult analysis={analysis} />
        )}

      </div>
    </div>
  );
}

export default AnalyzeResume;