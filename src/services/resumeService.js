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

// View Resume
export const viewResume = (id) => {
  window.open(
    `http://localhost:8080/api/resumes/view/${id}?token=${localStorage.getItem("token")}`,
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