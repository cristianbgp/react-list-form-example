import { createContext } from "react";

const StepContext = createContext();

export const Provider = StepContext.Provider;
export const Consumer = StepContext.Consumer;
export default StepContext;
