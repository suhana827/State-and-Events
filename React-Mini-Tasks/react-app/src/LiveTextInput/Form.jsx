import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [text, setText] = useState("");

  return (
    <div className="form-container">
      <h2>Live Text Form</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}


export default Form;
