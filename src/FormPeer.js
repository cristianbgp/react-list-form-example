import React from "react";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import InputRadio from "./InputRadio";

function FormPeer({ addPeer, step }) {
  const [fields, setFields] = React.useState({
    name: "",
    q1: "",
    q2: "",
    q3: "",
    "q4-a": "",
    "q4-b": "",
    q5: "",
    q6: "",
    q7: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    addPeer(fields);
    setFields({
      name: "",
      q1: "",
      q2: "",
      q3: "",
      "q4-a": "",
      "q4-b": "",
      q5: "",
      q6: "",
      q7: ""
    });
  }

  function handleChange(event) {
    setFields({ ...fields, [event.target.name]: event.target.value });
    console.log(event.target);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        handleChange={handleChange}
        fields={fields}
        question={"Which is the name of your coworker?"}
        name={"name"}
      />

      <InputTextArea
        handleChange={handleChange}
        fields={fields}
        question={"What are their main strengths?"}
        name={"q1"}
      />

      <InputTextArea
        handleChange={handleChange}
        fields={fields}
        question={"How did he contribute to the team during the gate?"}
        name={"q2"}
      />

      <InputTextArea
        handleChange={handleChange}
        fields={fields}
        question={
          "What opportunities for improvement does he have? Be specific and try to give examples"
        }
        name={"q3"}
      />

      <p>Please complete with honesty</p>

      <InputRadio handleChange={handleChange} name={"q4-a"} />

      <p>They promptly agrees when he/she makes mistakes</p>
      <input
        id="q4-b1"
        name="q4-b"
        type="radio"
        onChange={handleChange}
        value="1"
      />
      <label htmlFor="q4-b1">1 - Strongly disagree</label>
      <input
        id="q4-b2"
        name="q4-b"
        type="radio"
        onChange={handleChange}
        value="2"
      />
      <label htmlFor="q4-b2">2 - Disagree</label>
      <input
        id="q4-b3"
        name="q4-b"
        type="radio"
        onChange={handleChange}
        value="3"
      />
      <label htmlFor="q4-b3">3 - Neither agree nor disagree</label>
      <input
        id="q4-b4"
        name="q4-b"
        type="radio"
        onChange={handleChange}
        value="4"
      />
      <label htmlFor="q4-b4">4 - Agree</label>
      <input
        id="q4-b5"
        name="q4-b"
        type="radio"
        onChange={handleChange}
        value="5"
      />
      <label htmlFor="q4-b5">5 - Strongly agree</label>

      <InputTextArea
        handleChange={handleChange}
        fields={fields}
        question={"The superpower of this person is:"}
        name={"q5"}
      />

      <InputTextArea
        handleChange={handleChange}
        fields={fields}
        question={"Would you like to work with this person in the future? Why?"}
        name={"q6"}
      />

      <InputTextArea
        handleChange={handleChange}
        fields={fields}
        question={"Is there anything else you want to mention?"}
        name={"q7"}
      />

      <button type="submit">{step < 2 ? "Next" : "Send"}</button>
    </form>
  );
}

export default FormPeer;
