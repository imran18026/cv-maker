/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  content: { name: string; email: string; body: string };
  setContent: React.Dispatch<React.SetStateAction<any>>;
};

export const LetterForm = ({ content, setContent }: Props) => (
  <form className="space-y-4 mb-6">
    <input
      type="text"
      placeholder="Your Name"
      value={content.name}
      onChange={(e) => setContent({ ...content, name: e.target.value })}
      className="w-full border p-2"
    />
    <input
      type="email"
      placeholder="Your Email"
      value={content.email}
      onChange={(e) => setContent({ ...content, email: e.target.value })}
      className="w-full border p-2"
    />
    <textarea
      rows={10}
      placeholder="Write here..."
      value={content.body}
      onChange={(e) => setContent({ ...content, body: e.target.value })}
      className="w-full border p-2"
    />
  </form>
);
