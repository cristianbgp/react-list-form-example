import React from "react";

function InputText({ handleChange, fields, question, name }) {
  return (
    <label htmlFor={name}>
      <p>{question}</p>
      <input
        id={name}
        name={name}
        type="text"
        onChange={handleChange}
        value={fields[name]}
      />
    </label>
  );
}

export default InputText;
