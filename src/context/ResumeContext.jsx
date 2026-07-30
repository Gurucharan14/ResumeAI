import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumes, setResumes] = useState([]);

  const addResume = (file) => {
    const newResume = {
      id: Date.now(),
      name: file.name,
      uploadDate: new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
}),
      score: "Pending",
      status: "Uploaded",
    };

    setResumes((prev) => [...prev, newResume]);
  };

  const deleteResume = (id) => {
    setResumes((prev) => prev.filter((resume) => resume.id !== id));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumes,
        addResume,
        deleteResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}