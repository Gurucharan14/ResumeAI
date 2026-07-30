import {
  Calendar,
  Eye,
  Trash2,
  Sparkles,
  FileText,
  BarChart3,
} from "lucide-react";

function ResumeCard({
  resume,
  onView,
  onDelete,
  onAnalyze,
  onViewAnalysis,
}) {
  const isAnalyzed = resume.status === "ANALYZED";
  const hasScore = typeof resume.score === "number";

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
            <FileText className="text-purple-600" size={24} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 break-all">
              {resume.name}
            </h2>

            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={15} />
              {resume.uploadDate}
            </div>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isAnalyzed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {isAnalyzed ? "Analyzed" : "Pending"}
        </span>
      </div>

      {/* Score */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">
            ATS Score
          </span>

          <span
            className={`text-sm font-semibold ${
              !hasScore
                ? "text-gray-400"
                : resume.score >= 80
                ? "text-green-600"
                : resume.score >= 60
                ? "text-blue-600"
                : "text-red-600"
            }`}
          >
            {hasScore ? `${resume.score}%` : "--"}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-700"
            style={{
              width: hasScore ? `${resume.score}%` : "0%",
            }}
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          onClick={onView}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-50 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          <Eye size={16} />
          View PDF
        </button>

        <button
          onClick={onViewAnalysis}
          disabled={!isAnalyzed}
          className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition ${
            isAnalyzed
              ? "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <BarChart3 size={16} />
          Analysis
        </button>

        <button
          onClick={onAnalyze}
          className="flex items-center justify-center gap-2 rounded-lg bg-purple-50 py-2.5 text-sm font-medium text-purple-600 transition hover:bg-purple-600 hover:text-white"
        >
          <Sparkles size={16} />
          {isAnalyzed ? "Re-analyze" : "Analyze"}
        </button>

        <button
          onClick={onDelete}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-50 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default ResumeCard;