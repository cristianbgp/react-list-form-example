import React from "react";

function FormPeer({ addPeer, step }) {
  const [fields, setFields] = React.useState({
    name: "",
    q1: "",
    q2: "",
    q3: "",
    q5: "",
    q6: "",
    q7: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    addPeer(fields);
    setFields({
      name: "",
      q1: "",
      q2: "",
      q3: "",
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
      <label htmlFor="name">
        <p>What is the name of the person that you want to give feedback?</p>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={fields.name}
        />
      </label>
      <label htmlFor="q1">
        <p>What are their main strengths?</p>
        <textarea
          id="q1"
          name="q1"
          type="text"
          onChange={handleChange}
          value={fields.q1}
        />
      </label>
      <label htmlFor="q2">
        <p>How did he contribute to the team during the gate?</p>
        <textarea
          id="q2"
          name="q2"
          type="text"
          onChange={handleChange}
          value={fields.q2}
        />
      </label>
      <label htmlFor="q3">
        <p>
          What opportunities for improvement does he have? Be specific and try
          to give examples
        </p>
        <textarea
          id="q3"
          name="q3"
          type="text"
          onChange={handleChange}
          value={fields.q3}
        />
      </label>
      <label htmlFor="q5">
        <p>The superpower of this person is:</p>
        <textarea
          id="q5"
          name="q5"
          type="text"
          onChange={handleChange}
          value={fields.q5}
        />
      </label>
      <label htmlFor="q6">
        <p>Would you like to work with this person in the future? Why?</p>
        <textarea
          id="q6"
          name="q6"
          type="text"
          onChange={handleChange}
          value={fields.q6}
        />
      </label>
      <label htmlFor="q7">
        <p>Is there anything else you want to mention?</p>
        <textarea
          id="q7"
          name="q7"
          type="text"
          onChange={handleChange}
          value={fields.q7}
        />
      </label>

      <button type="submit">{step < 2 ? "Next" : "Send"}</button>
    </form>
  );
}

export default FormPeer;
