import { createContext, useState } from "react";

export const ReplacedSquareContext = createContext();

export const ReplacedSquareProvider = ({ children }) => {
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  return (
    <ReplacedSquareContext.Provider
      value={{
        squareBeingReplaced,
        setSquareBeingReplaced,
      }}
    >
      {children}
    </ReplacedSquareContext.Provider>
  );
};
