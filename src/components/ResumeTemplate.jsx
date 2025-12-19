export default function ResumeTemplate({ data }) {
  return (
    <div id="resume" className="resume">
      {/* HEADER */}
      <div className="resume-header">
        <div>
          <div className="resume-name">{data.name}</div>
          <p>📍 {data.city}</p>
        </div>
        <div className="resume-contact">
          <p>📞 {data.phone}</p>
          <p>✉️ {data.email}</p>
        </div>
      </div>

      <div className="resume-grid">
        {/* LEFT */}
        <div>
          <div className="section">
            <h3>🎓 Education</h3>
            <p>{data.education}</p>
          </div>

          <div className="section">
            <h3>💼 Experience</h3>
            <p>{data.experience}</p>
          </div>

          <div className="section">
            <h3>🚀 Projects</h3>
            {data.projects.map((p, i) => (
              <div key={i} className="project-card">
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="section">
            <h3>🛠 Skills</h3>
            {data.skills.map((s, i) => (
              <span key={i} className="skill">
                {s}
              </span>
            ))}
          </div>

          <div className="section">
            <h3>🌐 Social</h3>
            <p>🔗 LinkedIn</p>
            <p>{data.linkedin}</p>
            <p>💻 GitHub</p>
            <p>{data.github}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
