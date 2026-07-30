import {
  Code2,
  Database,
  Brain,
  Layers3,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            ResumeAI
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            AI-powered Resume Analyzer that helps job seekers
            improve ATS scores, identify missing skills, and
            receive personalized AI suggestions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="#hero"
                className="hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-blue-400 transition"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/login"
                className="hover:text-blue-400 transition"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Built With
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="flex items-center gap-2">
              <Layers3 size={18} />
              React
            </li>

            <li className="flex items-center gap-2">
              <Code2 size={18} />
              Spring Boot
            </li>

            <li className="flex items-center gap-2">
              <Database size={18} />
              MySQL
            </li>

            <li className="flex items-center gap-2">
              <Brain size={18} />
              Gemini AI
            </li>

          </ul>
        </div>

        {/* Connect */}
<div>
  <h3 className="text-lg font-semibold mb-4">
    Connect
  </h3>

  <div className="space-y-3">

    <a
      href="https://github.com/Gurucharan14"
      target="_blank"
      rel="noreferrer"
      className="block text-gray-400 hover:text-blue-400 transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/gurucharanb1410/"
      target="_blank"
      rel="noreferrer"
      className="block text-gray-400 hover:text-blue-400 transition"
    >
      LinkedIn
    </a>

  </div>

  <p className="mt-5 text-gray-400 text-sm">
    Explore the project and connect with me.
  </p>
</div>
      </div>

      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2026 ResumeAI • Built by <span className="font-medium text-white">Guru Charan</span>
      </div>
    </footer>
  );
}

export default Footer;