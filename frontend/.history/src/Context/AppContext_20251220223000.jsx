import React, { createContext, useMemo } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹";

  // useMemo to avoid unnecessary re-renders
  const value = useMemo(
    () => ({
      doctors,
      currencySymbol,
    }),
    []
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
