/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const CvDownloadButton = ({ content }: { content: any }) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const element = previewRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${content.name}-cv.pdf`);
  };

  return (
    <>
      <div
        ref={previewRef}
        className="max-w-3xl mx-auto bg-white shadow-lg"
        style={{ padding: "1.5rem" }}
      >
        <div style={{ maxWidth: "768px", margin: "auto" }}>
          <div>
            {content.name && (
              <h1
                style={{
                  maxWidth: "40%",
                  fontSize: "1.875rem", // Tailwind's text-3xl
                  fontWeight: "700", // Tailwind's font-bold
                  color: "#2d3748", // Tailwind's text-gray-800
                }}
              >
                {content.name}
              </h1>
            )}
            {content.designation && (
              <h2
                style={{
                  maxWidth: "40%",
                  fontSize: "1rem", // Tailwind's text-md
                  fontWeight: "600", // Tailwind's font-semibold
                  color: "#4a5568", // Tailwind's text-gray-700
                }}
              >
                {content.designation}
              </h2>
            )}
          </div>

          {content.image && (
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                maxWidth: "40%",
              }}
            >
              <img
                src={content.image}
                alt="Profile Image"
                style={{
                  height: "14rem", // Tailwind's h-32
                  width: "10rem", // Tailwind's w-32
                  objectFit: "cover",
                  border: "none",
                }}
              />
            </div>
          )}

          <div
            style={{
              fontSize: "0.875rem",
              color: "#4a5568",
              marginTop: "1rem",
              maxWidth: "30%",
            }}
          >
            {content.email && <p>{content.email}</p>}
            {content.phone && <p>{content.phone}</p>}
            {content.address && <p>{content.address}</p>}
            {content.linkedIn && <p>{content.linkedIn}</p>}
            {content.github && <p>{content.github}</p>}
            {content.portfolio && <p>{content.portfolio}</p>}
          </div>

          {content.skills && (
            <div style={{ maxWidth: "30%" }}>
              <h3
                style={{
                  fontSize: "1.125rem", // Tailwind's text-lg
                  fontWeight: "600", // Tailwind's font-semibold
                  marginTop: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                Skills
              </h3>
              <p
                style={{
                  whiteSpace: "pre-line",
                  color: "#2d3748", // Tailwind's text-gray-800
                  textAlign: "justify",
                }}
              >
                {content.skills}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </>
  );
};
