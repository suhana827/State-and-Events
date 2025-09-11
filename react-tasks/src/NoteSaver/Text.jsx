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
    if (current.trim() === "") {
      return;
    }

    const timestamp = new Date().toLocaleString();
    const newNote = { text: current, time: timestamp };
    setNotes([...notes, newNote]);
    setCurrent("");
  }

  function handleDeleteNote(indexToDelete){
     const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
     setNotes(updatedNotes);
  }

  return (
    <>
      <h1>Note Taker</h1>
      <div className="input-section">
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
              <p className="note-time">{note.time}</p>
              <p className="note-next">{note.text}</p>
              <button className="delete-button" 
              onClick={()=>handleDeleteNote(index)}>
              Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Text;