export const saveResume = (data) => {
  const resumes = JSON.parse(localStorage.getItem("resumes")) || [];
  resumes.push(data);
  localStorage.setItem("resumes", JSON.stringify(resumes));
};

export const getResumes = () => {
  return JSON.parse(localStorage.getItem("resumes")) || [];
};

export const getResumeById = (id) => {
  const resumes = getResumes();
  return resumes.find(r => r.id === id);
};
