/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { jsPDF } from "jspdf";

export const DownloadButton = ({ content }: { content: any }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text(`Name: ${content.name}`, 10, 10);
    doc.text(`Email: ${content.email}`, 10, 20);

    // Split body into lines so it wraps properly
    const lines = doc.splitTextToSize(content.body, 180);
    doc.text(lines, 10, 35);

    doc.save("letter.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Download Letter
    </button>
  );
};
