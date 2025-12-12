"use client";
import { useEffect, useRef, useState } from "react";

const page = () => {
  const [text, setText] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeout = useRef(null);

  useEffect(() => {
    if (isSaving) {
      const timeout = setTimeout(() => {
        setIsSaving(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    setIsSaving(true);
    if (saveTimeout.current) {
      clearTimeout(saveTimeout.current);
    }
  };

  return (
    <>
      {/* Text Area  */}
      <div>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Start typing..."
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Log the save to console 2 seconds after the typing stops */}
        {isSaving && (
          <div>
            <div className="mt-2 text-sm text-gray-500">Saving...</div>
          </div>
        )}

        {!isSaving && text && <div className="mt-2 text-sm">{text}</div>}
      </div>
    </>
  );
};

export default page;
