import { useEffect, useRef, useState } from "react";

export default function AutoSaveEditor() {
  const [text, setText] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (text === "") return;

    setIsSaving(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log("Saved:", text);
      setIsSaving(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [text]);

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
      />
      <div>{isSaving ? "Saving..." : "Saved"}</div>
    </div>
  );
}
