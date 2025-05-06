"use client";
import { CvForm } from "@/components/CvForm";
// import { CvPreview } from "@/components/CvPreview";
import { useState } from "react";
import { CvDownloadButton } from "@/components/CvDownloadButton";

export default function CVPage() {
  const [content, setContent] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    address: "",
    linkedIn: "",
    github: "",
    portfolio: "",
    skills: "",
    image: "", // include this if your form allows uploading image
  });

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Create Your CV
      </h1>
      <CvForm content={content} setContent={setContent} />
      {/* <CvPreview content={content} /> */}
      <CvDownloadButton content={content} />
    </main>
  );
}
