import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VoiceInput from "../components/VoiceInput";
import { saveResume } from "../utils/storage";

export default function ResumeForm() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const resume = {
      ...data,
      id: Date.now().toString(),
      skills: data.skills.split(","),
      projects: data.projects.split("\n")
    };
    saveResume(resume);
    navigate(`/preview/${resume.id}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Professional Resume</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Full Name" />
          <input {...register("phone")} placeholder="Phone Number" />
          <input {...register("email")} placeholder="Email" />
          <input {...register("city")} placeholder="City" />

          <input {...register("education")} placeholder="Education (Degree, College)" />

          <VoiceInput onResult={(t) => setValue("skills", t)} />
          <textarea {...register("skills")} placeholder="Skills (comma separated)" />

          <textarea {...register("experience")} placeholder="Work Experience" />

          <textarea
            {...register("projects")}
            placeholder="Projects (one per line)"
          />

          <input {...register("linkedin")} placeholder="LinkedIn URL" />
          <input {...register("github")} placeholder="GitHub URL" />

          <button>Create Resume</button>
        </form>
      </div>
    </div>
  );
}
