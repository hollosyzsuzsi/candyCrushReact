import { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [scoreDisplay, setScoreDisplay] = useState(0);
  return (
    <ScoreContext.Provider
      value={{
        scoreDisplay,
        setScoreDisplay,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
