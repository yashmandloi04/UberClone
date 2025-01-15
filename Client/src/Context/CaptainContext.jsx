import { createContext, useState } from "react";

export const CaptainContext = createContext({
  captain: null,
  setCaptain: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
  updateCaptain: () => {},
});

const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };
const value = {
  captain,
  setCaptain,
  isLoading,
  setIsLoading,
  error,
  setError,
  updateCaptain,
}
  return (
    <CaptainContext.Provider value={value}>
      {children}
    </CaptainContext.Provider>
  );
}

export default CaptainProvider;