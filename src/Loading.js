/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Loading() {
  return (
    <div css={{ animation: `${fade} 500ms ease infinite` }}>
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
