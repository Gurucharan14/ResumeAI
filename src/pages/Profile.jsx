import { useNavigate } from "react-router-dom";
import { User, Mail, FileText, ArrowLeft } from "lucide-react";

function Profile() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <User size={50} className="text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold mt-4">My Profile</h1>

          <p className="text-gray-500 mt-2">
            Manage your account information
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-4 border-b pb-4">
            <Mail className="text-blue-600" />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold">{userEmail}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b pb-4">
            <FileText className="text-green-600" />
            <div>
              <p className="text-gray-500 text-sm">Account Status</p>
              <p className="font-semibold text-green-600">Active</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;