import { Upload } from "lucide-react";

function DashboardHeader({ userEmail, onUpload }) {
  const userName = userEmail
    ? userEmail.split("@")[0].replace(/[._]/g, " ")
    : "User";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 px-8 py-6 text-white shadow-xl">

      {/* Decorative Circles */}
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-white/10"></div>

      <div className="relative z-10">

        <p className="text-[11px] uppercase tracking-[0.3em] text-purple-100">
          AI Powered Resume Analyzer
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Welcome back, {userName} 👋
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100">
          Ready to improve your resume today? Upload a resume,
          compare it with a job description, and receive AI-powered
          ATS insights in seconds.
        </p>

        <button
          onClick={onUpload}
          className="mt-5 flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-semibold text-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Upload size={18} />
          Upload Resume
        </button>

      </div>
    </div>
  );
}

export default DashboardHeader;