import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("resumeData"));

  if (!data || data.id.toString() !== id) {
    return <p>Profile not found</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>{data.name}</h2>
      <p>Phone: {data.phone}</p>
      <p>City: {data.city}</p>
      <p>Skills: {data.skills}</p>
      <p>Experience: {data.experience}</p>
    </div>
  );
};

export default Profile;
