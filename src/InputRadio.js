import React from "react";

function InputRadio({ handleChange, question, name }) {
  return (
    <>
      <p>{question}</p>
      <input
        id={name + "1"}
        name={name}
        type="radio"
        onChange={handleChange}
        value="1"
      />
      <label htmlFor={name + "1"}>1 - Strongly disagree</label>

      <input
        id={name + "2"}
        name={name}
        type="radio"
        onChange={handleChange}
        value="2"
      />
      <label htmlFor={name + "2"}>2 - Disagree</label>

      <input
        id={name + "3"}
        name={name}
        type="radio"
        onChange={handleChange}
        value="3"
      />
      <label htmlFor={name + "3"}>3 - Neither agree nor disagree</label>

      <input
        id={name + "4"}
        name={name}
        type="radio"
        onChange={handleChange}
        value="4"
      />
      <label htmlFor={name + "4"}>4 - Agree</label>

      <input
        id={name + "5"}
        name={name}
        type="radio"
        onChange={handleChange}
        value="5"
      />
      <label htmlFor={name + "5"}>5 - Strongly agree</label>
    </>
  );
}

export default InputRadio;
