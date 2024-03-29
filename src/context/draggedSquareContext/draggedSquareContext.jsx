import { createContext, useState } from "react";

export const DraggedSquareContext = createContext();

export const DraggedSquareProvider = ({ children }) => {
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  return (
    <DraggedSquareContext.Provider
      value={{
        squareBeingDragged,
        setSquareBeingDragged,
      }}
    >
      {children}
    </DraggedSquareContext.Provider>
  );
};
