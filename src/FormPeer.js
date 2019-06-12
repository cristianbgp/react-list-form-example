import React from "react";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import InputRadio from "./InputRadio";
import StepsContext from "./contexts/step";

function FormPeer({ addPeer }) {
  const step = React.useContext(StepsContext);

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

      <InputRadio
        handleChange={handleChange}
        question={"They like it when his/her ideas are challenged"}
        name={"q4-a"}
      />

      <InputRadio
        handleChange={handleChange}
        question={"They promptly agrees when he/she makes mistakes"}
        name={"q4-b"}
      />

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
