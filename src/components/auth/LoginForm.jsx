import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/ui/Input";
import { loginUser } from "../../services/authService";
import toast from "react-hot-toast";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Remember Me:", rememberMe);

setLoading(true);

try {
  const response = await loginUser({
    email,
    password,
  });

  if (response.success) {
  setErrors({});

 // Save user information
localStorage.setItem("userEmail", email.trim().toLowerCase());

// Save JWT Token
localStorage.setItem("token", response.token);

  toast.success(response.message);

  navigate("/dashboard");
}else {
    setErrors({
      general: response.message,
    });
  }
} catch (error) {
  console.error(error);
    toast.error("Something went wrong. Please try again.");
  setErrors({
    general: "Something went wrong. Please try again.",
  });
} finally {
  setLoading(false);
}
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

      <h1 className="text-3xl font-bold text-center mb-2">
        Welcome Back
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Login to continue using ResumeAI
      </p>

      <form onSubmit={handleLogin}>

        {/* Email */}

        <Input
          label="Email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && (
          <p className="text-red-500 text-sm mb-4">
            {errors.email}
          </p>
        )}

        {/* Password */}

        <div className="mb-2">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>
        </div>

        {errors.password && (
          <p className="text-red-500 text-sm mb-4">
            {errors.password}
          </p>
        )}

        {/* Remember Me + Forgot Password */}

        <div className="flex items-center justify-between mb-5">

          <label className="flex items-center gap-2 cursor-pointer">

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />

            <span className="text-sm text-gray-700">
              Remember Me
            </span>

          </label>

          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        {errors.general && (
          <p className="text-red-500 text-center mb-4">
            {errors.general}
          </p>
        )}

        <button
  type="submit"
  disabled={loading}
  className={`w-full py-3 rounded-lg text-white transition ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {loading ? "Logging in..." : "Login"}
</button>

      </form>

      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <span
  onClick={() => navigate("/register")}
  className="text-blue-600 cursor-pointer hover:underline"
>
  Register
</span>
      </p>

    </div>
  );
}

export default LoginForm;