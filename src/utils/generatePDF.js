import html2pdf from "html2pdf.js";

export const generatePDF = () => {
  html2pdf().from(document.getElementById("resume")).save("resume.pdf");
};
