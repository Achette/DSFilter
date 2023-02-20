import { createContext } from "react";

export type ContexNumberCountType = {
  contextNumberCount: number;
  setContexNumberCount: (contextNumberCount: number) => void;
};

export const ContextNumberCount = createContext<ContexNumberCountType>({
  contextNumberCount: 0,
  setContexNumberCount: () => {},
});
