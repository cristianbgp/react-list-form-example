import React from "react";

function OutputForm({ peers }) {
  return (
    <>
      <h2>Results</h2>
      {peers.map(peer => {
        return (
          <div key={peer.id}>
            <h3>Name:</h3>
            <p>{peer.name}</p>
            <h4>
              What is the name of the person that you want to give feedback?
            </h4>
            <p>{peer.q1}</p>
            <h4>What are their main strengths?</h4>
            <p>{peer.q2}</p>
            <h4>How did he contribute to the team during the gate?</h4>
            <p>{peer.q3}</p>
            <h4>They like it when his/her ideas are challenged</h4>
            <p>{peer["q4-a"]}</p>
            <h4>They promptly agrees when he/she makes mistakes</h4>
            <p>{peer["q4-b"]}</p>
            <h4>The superpower of this person is:</h4>
            <p>{peer.q5}</p>
            <h4>Would you like to work with this person in the future? Why?</h4>
            <p>{peer.q6}</p>
            <h4>Is there anything else you want to mention?</h4>
            <p>{peer.q7}</p>
          </div>
        );
      })}
    </>
  );
}

export default OutputForm;
