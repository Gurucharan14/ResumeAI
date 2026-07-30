import api from "../api/axiosConfig";

export const getAnalysis = async (resumeId) => {
  const response = await api.get(`/api/analysis/${resumeId}`);
  return response.data;
};