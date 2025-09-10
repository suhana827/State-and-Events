import React, { useState, useRef, useEffect } from "react";
import "./Text.css";

function Text() {
  const [current, setCurrent] = useState("");
  const inputRef = useRef(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function AddNotes() {
    const timestamp = new Date().toLocaleTimeString();
    const newNote = { text: current, time: timestamp };
    setNotes([...notes, newNote]);
    setCurrent("");
  }

  return (
    <div>
      <textarea
        ref={inputRef}
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        placeholder="Type here..."
      />

      <button onClick={AddNotes}>Add Notes</button>

      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note.time}</p>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Text;