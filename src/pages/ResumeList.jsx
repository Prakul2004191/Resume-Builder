import { getResumes } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function ResumeList() {
  const resumes = getResumes();
  const navigate = useNavigate();

  return (
    <div className="container card">
      <h2>My Resumes</h2>
      {resumes.map(r => (
        <p key={r.id} onClick={() => navigate(`/preview/${r.id}`)}>
          👉 {r.name}
        </p>
      ))}
    </div>
  );
}
