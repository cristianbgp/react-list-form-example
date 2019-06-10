import { createContext } from "react";

const PeersContext = createContext();

export const Provider = PeersContext.Provider;
export const Consumer = PeersContext.Consumer;
export default PeersContext;
