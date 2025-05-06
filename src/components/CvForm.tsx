/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type Props = {
  content: any;
  setContent: React.Dispatch<React.SetStateAction<any>>;
};

export const CvForm = ({ content, setContent }: Props) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContent({ ...content, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="space-y-4 max-w-2xl mx-auto">
      <h1 className="block text-center font-semibold mb-1">Personal Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={content.name}
          onChange={(e) => setContent({ ...content, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Designation"
          value={content.designation}
          onChange={(e) =>
            setContent({ ...content, designation: e.target.value })
          }
          className="border p-2 w-full"
        />

        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 w-full"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          value={content.email}
          onChange={(e) => setContent({ ...content, email: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={content.phone}
          onChange={(e) => setContent({ ...content, phone: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Address"
          value={content.address}
          onChange={(e) => setContent({ ...content, address: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="url"
          placeholder="LinkedIn (optional)"
          value={content.linkedIn}
          onChange={(e) => setContent({ ...content, linkedIn: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="url"
          placeholder="GitHub (optional)"
          value={content.github}
          onChange={(e) => setContent({ ...content, github: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="url"
          placeholder="Portfolio (optional)"
          value={content.portfolio}
          onChange={(e) =>
            setContent({ ...content, portfolio: e.target.value })
          }
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block text-center font-semibold mb-1">Skills</label>
        <textarea
          rows={5}
          placeholder="Write a brief skills about yourself..."
          value={content.skills}
          onChange={(e) => setContent({ ...content, skills: e.target.value })}
          className="w-full border p-2"
        />
      </div>
    </form>
  );
};
