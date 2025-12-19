import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="glass-card">
        <h1>Universal Resume Builder 🇮🇳</h1>
        <p>
          Build professional resumes with voice, QR & shareable profiles —
          designed for Bharat workforce.
        </p>

        <br />

        <button onClick={() => navigate("/form")}>
          Create Resume
        </button>

        <button
          className="secondary"
          onClick={() => navigate("/resumes")}
          style={{ marginLeft: 12 }}
        >
          My Resumes
        </button>
      </div>
    </div>
  );
}
