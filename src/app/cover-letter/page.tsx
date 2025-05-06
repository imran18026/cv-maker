"use client";
import { LetterForm } from "@/components/LetterForm";
import { Preview } from "@/components/Preview";
import { DownloadButton } from "@/components/DownloadButton";
import { useState } from "react";

export default function CoverLetterPage() {
  const [content, setContent] = useState({
    name: "",
    email: "",
    body: "",
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Create Your Cover Letter</h1>
      <LetterForm content={content} setContent={setContent} />
      <Preview content={content} />
      <DownloadButton content={content} />
    </main>
  );
}
