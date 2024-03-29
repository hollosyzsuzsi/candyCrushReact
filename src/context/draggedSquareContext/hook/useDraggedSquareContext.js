import { useContext } from "react";
import { DraggedSquareContext } from "../draggedSquareContext";

export const useDraggedSquareContext = () => {
  if (!DraggedSquareContext) {
    throw new Error("Dragged square context is undefined.");
  }
  return useContext(DraggedSquareContext);
};
