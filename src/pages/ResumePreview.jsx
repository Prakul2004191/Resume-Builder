import { useParams } from "react-router-dom";
import { getResumeById } from "../utils/storage";
import ResumeTemplate from "../components/ResumeTemplate";
import { generatePDF } from "../utils/generatePDF";
import QRCodeBox from "../components/QRCodeBox";

export default function ResumePreview() {
  const { id } = useParams();
  const data = getResumeById(id);

  if (!data) return <p>Resume not found</p>;

  return (
    <div className="container">
      <div className="card">
        <ResumeTemplate data={data} />
        <br />
        <button onClick={generatePDF}>Download PDF</button>
        <br /><br />
        <QRCodeBox id={id} />
      </div>
    </div>
  );
}
