import { createContext, useContext } from "react";

export const AppContext = createContext(undefined);

export function useAppContext() {
  const context = useContext(useAppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
}
