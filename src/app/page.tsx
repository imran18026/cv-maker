// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">CV Maker</h1>
      <div className="space-y-4">
        <Link href="/cv" className="block text-blue-600 hover:underline">
          Write CV
        </Link>
        <Link
          href="/cover-letter"
          className="block text-blue-600 hover:underline"
        >
          Write Cover Letter
        </Link>
        <Link
          href="/motivation-letter"
          className="block text-blue-600 hover:underline"
        >
          Write Motivation Letter
        </Link>
      </div>
    </main>
  );
}
