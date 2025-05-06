/* eslint-disable @typescript-eslint/no-explicit-any */
export const Preview = ({ content }: { content: any }) => (
  <div className="border p-4 bg-gray-50 rounded shadow-sm">
    <h2 className="text-lg font-bold mb-2">Preview</h2>
    <p>
      <strong>Name:</strong> {content.name}
    </p>
    <p>
      <strong>Email:</strong> {content.email}
    </p>
    <hr className="my-2" />
    <p>{content.body}</p>
  </div>
);
