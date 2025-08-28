import React, { useState, useRef, useEffect } from "react";
import './Save-Notes.css';

function Notes() {
  const [note, setNote] = useState("");
  const [savedMsg, setSavedMsg] = useState("");

  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
  }, []);


  useEffect(() => {
    const saved = localStorage.getItem("savedNote"); // ✅ no space in key
    if (saved !== null) {
      setNote(saved);
      setSavedMsg("Loaded saved note!");
    }
  }, []);

  // Save note whenever it changes
  useEffect(() => {
    localStorage.setItem("savedNote", note); // ✅ matches the key above
    if (note !== "") {
      setSavedMsg("Auto-saved!");
    }
  }, [note]);

  return (
    <div>
      <h1>Note Taker</h1>
      <input
        type="text"
        id="text"
        placeholder="Take your notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        ref={inputRef}
      />
      <p>{savedMsg}</p>
    </div>
  );
}

export default Notes;
