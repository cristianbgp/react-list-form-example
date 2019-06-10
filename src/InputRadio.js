import React from "react";

function InputRadio({ handleChange, question, name }) {
  return (
    <>
      <p>{question}</p>
      <input
        id="q4-a1"
        name={name}
        type="radio"
        onChange={handleChange}
        value="1"
      />
      <label htmlFor="q4-a1">1 - Strongly disagree</label>
      <input
        id="q4-a2"
        name={name}
        type="radio"
        onChange={handleChange}
        value="2"
      />
      <label htmlFor="q4-a2">2 - Disagree</label>
      <input
        id="q4-a3"
        name={name}
        type="radio"
        onChange={handleChange}
        value="3"
      />
      <label htmlFor="q4-a3">3 - Neither agree nor disagree</label>
      <input
        id="q4-a4"
        name={name}
        type="radio"
        onChange={handleChange}
        value="4"
      />
      <label htmlFor="q4-a4">4 - Agree</label>
      <input
        id="q4-a5"
        name={name}
        type="radio"
        onChange={handleChange}
        value="5"
      />
      <label htmlFor="q4-a5">5 - Strongly agree</label>
    </>
  );
}

export default InputRadio;
