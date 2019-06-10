import React from "react";

function InputTextArea({ handleChange, fields, question, name }) {
  return (
    <label htmlFor={name}>
      <p>{question}</p>
      <textarea
        id={name}
        name={name}
        type="text"
        onChange={handleChange}
        value={fields[name]}
      />
    </label>
  );
}

export default InputTextArea;
