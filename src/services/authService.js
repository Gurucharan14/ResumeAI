import axiosInstance from "../api/axiosConfig";

// Register User
export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/api/auth/register", userData);
  return response.data;
};

// Login User
export const loginUser = async (loginData) => {
  const response = await axiosInstance.post("/api/auth/login", loginData);
  return response.data;
};