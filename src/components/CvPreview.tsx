/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const CvPreview = ({ content }: { content: any }) => (
  <div className="max-w-3xl mx-auto">
    <div>
      {content.name && (
        <h1 className="text-3xl font-bold text-gray-800">{content.name}</h1>
      )}
      {content.designation && (
        <h2 className="text-md font-semibold text-gray-700">
          {content.designation}
        </h2>
      )}
    </div>

    {content.image && (
      <div className="flex justify-start">
        <img
          src={content.image}
          alt="Profile Image"
          className="h-32 w-32 object-cover border-none"
        />
      </div>
    )}

    <div className="text-sm text-gray-700 space-y-1">
      {content.email && <p>{content.email}</p>}
      {content.phone && <p>{content.phone}</p>}
      {content.address && <p>{content.address}</p>}
      {content.linkedIn && <p>{content.linkedIn}</p>}
      {content.github && <p>{content.github}</p>}
      {content.portfolio && <p>{content.portfolio}</p>}
    </div>

    {content.skills && (
      <div>
        <h3 className="text-lg font-semibold mt-6 mb-2">skills</h3>
        <p className="whitespace-pre-line text-gray-800 max-w-[40%] text-justify">
          {content.skills}
        </p>
      </div>
    )}
  </div>
);
