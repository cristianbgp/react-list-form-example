import React from "react";
import FormPeer from "./FormPeer";

function FormFeedback() {
  const [peers, setPeers] = React.useState([]);
  const [step, setStep] = React.useState(0);

  function addPeer(peer) {
    setStep(step + 1);
    setPeers([...peers, { id: peers.length, ...peer }]);
  }

  return (
    <>
      <h1>Feedback Form</h1>
      {step < 3 ? (
        <>
          <h2>Form: {step + 1}</h2>
          <FormPeer addPeer={addPeer} step={step} />
        </>
      ) : (
        <code>{JSON.stringify(peers)}</code>
      )}
    </>
  );
}

export default FormFeedback;
