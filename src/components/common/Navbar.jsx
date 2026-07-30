import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const loggedIn = isAuthenticated();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 bg-white shadow-sm">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-blue-600"
      >
        ResumeAI
      </Link>

      <ul className="flex items-center gap-8 text-lg">

        {!loggedIn ? (
          <>
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-blue-600 transition"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-blue-600 transition"
              >
                Features
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-600 transition"
              >
                About
              </button>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-blue-600 transition"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-600 transition"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          </>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;