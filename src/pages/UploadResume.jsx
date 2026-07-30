import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, X, ArrowLeft } from "lucide-react";
import { useResume } from "../context/ResumeContext";
import { uploadResume } from "../services/resumeService";
import toast from "react-hot-toast";

function UploadResume() {
  const navigate = useNavigate();
  const { addResume } = useResume();

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

 const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];

  if (!selectedFile) return;

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(selectedFile.type)) {
    toast.error("Only PDF, DOC and DOCX files are allowed.");
    return;
  }

  setFile(selectedFile);
};

  const handleUpload = async () => {
  if (!file) {
    toast.error("Please choose a resume first.");
    return;
  }

  setLoading(true);

  try {
    const uploadedResume = await uploadResume(file);

    addResume({
      id: uploadedResume.id,
      name: uploadedResume.fileName,
      uploadDate: uploadedResume.uploadDate.split("T")[0],
      status: uploadedResume.status,
      score: uploadedResume.aiScore,
    });

    toast.success("Resume uploaded successfully!");

    navigate("/dashboard");

  } catch (error) {

    console.error(error);

    toast.error("Upload failed!");

  } finally {

    setLoading(false);

  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center text-blue-600 mb-6 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold mb-2">
          Upload Resume
        </h1>

        <p className="text-gray-500 mb-8">
          Upload your resume in PDF, DOC or DOCX format.
        </p>

        <label className="border-2 border-dashed border-blue-400 rounded-xl p-10 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition">

          <Upload size={40} className="text-blue-600 mb-3" />

          <span className="font-medium">
            Choose Resume
          </span>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />

        </label>

        <div className="mt-8">

          <h3 className="font-semibold mb-2">
            Selected File
          </h3>

          {file ? (
            <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">

              <div className="flex items-center gap-2">

                <FileText size={20} />

                <span>{file.name}</span>

              </div>

              <button
                onClick={() => setFile(null)}
                className="text-red-600"
              >
                <X size={20} />
              </button>

            </div>
          ) : (
            <p className="text-gray-400">
              No file selected
            </p>
          )}

        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>

      </div>

    </div>
  );
}

export default UploadResume;