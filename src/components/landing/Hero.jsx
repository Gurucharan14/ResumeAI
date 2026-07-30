import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const scrollToDemo = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
        🚀 AI Powered Resume Analyzer
      </span>

      <h1 className="text-6xl font-bold leading-tight max-w-4xl">
        Land Your Dream Job
        <span className="text-blue-600"> with AI</span>
      </h1>

      <p className="text-gray-600 text-xl max-w-3xl mt-6">
        Analyze your resume, improve your ATS score,
        identify missing skills, and receive personalized
        AI suggestions in seconds.
      </p>

      <div className="mt-10">
        <button
          onClick={scrollToDemo}
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition"
        >
          View Demo
        </button>
      </div>

      <p className="mt-10 text-gray-500">
        ⭐ Trusted by aspiring Software Developers
      </p>
    </section>
  );
}

export default Hero;