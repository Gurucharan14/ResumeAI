import axiosInstance from "../api/axiosConfig";

// Upload Resume
export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axiosInstance.post(
    "/api/resumes/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

// Get All Resumes
export const getAllResumes = async () => {
  const response = await axiosInstance.get("/api/resumes");
  return response.data;
};

// Delete Resume
export const deleteResumeById = async (id) => {
  await axiosInstance.delete(`/api/resumes/${id}`);
};

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080";

export const viewResume = (id) => {
  window.open(
    `${API_URL}/api/resumes/view/${id}?token=${localStorage.getItem("token")}`,
    "_blank"
  );
};

// Analyze Resume
export const analyzeResume = async (resumeId, jobDescription) => {
  const response = await axiosInstance.post("/api/ai/analyze", {
    resumeId,
    jobDescription,
  });

  return response.data;
};