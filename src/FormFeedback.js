import React from "react";
// import FormPeer from "./FormPeer";
// import OutputForm from "./OutputForm";
import { Provider as PeersProvider } from "./contexts/peers";
import { Provider as StepProvider } from "./contexts/step";
import Loading from "./Loading";

const FormPeer = React.lazy(() => import("./FormPeer"));
const OutputForm = React.lazy(() => import("./OutputForm"));

function FormFeedback() {
  const [peers, setPeers] = React.useState([]);

  const [step, setStep] = React.useState(0);

  function addPeer(peer) {
    setStep(step + 1);
    setPeers([...peers, { id: peers.length, ...peer }]);
  }

  return (
    <PeersProvider value={peers}>
      <StepProvider value={step}>
        <h1>Feedback Form</h1>
        <React.Suspense fallback={<Loading />}>
          {step < 3 ? (
            <>
              <h2>Form: {step + 1}</h2>
              <FormPeer addPeer={addPeer} key={step} />
            </>
          ) : (
            <OutputForm />
          )}
        </React.Suspense>
      </StepProvider>
    </PeersProvider>
  );
}

export default FormFeedback;
