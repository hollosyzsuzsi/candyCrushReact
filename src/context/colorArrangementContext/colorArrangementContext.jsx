import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  return (
    <ColorContext.Provider
      value={{
        currentColorArrangement,
        setCurrentColorArrangement,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
