import { width } from "../constants";
import {
  checkForColumnOfFour,
  checkForColumnOfThree,
  checkForRowOfFour,
  checkForRowOfThree,
} from "../checkers";

export const dragStart = (e, setSquareBeingDragged) => {
  setSquareBeingDragged(e.target);
};

export const dragDrop = (e, setSquareBeingReplaced) => {
  setSquareBeingReplaced(e.target);
};

export const dragEnd = (
  currentColorArrangement,
  squareBeingReplaced,
  squareBeingDragged,
  setScoreDisplay,
  setSquareBeingDragged,
  setSquareBeingReplaced,
  setCurrentColorArrangement
) => {
  if (squareBeingDragged && squareBeingReplaced) {
    const squareBeingDraggedId = parseInt(
      squareBeingDragged.getAttribute("data-id")
    );
    const squareBeingReplacedId = parseInt(
      squareBeingReplaced.getAttribute("data-id")
    );

    currentColorArrangement[squareBeingReplacedId] =
      squareBeingDragged.getAttribute("src");
    currentColorArrangement[squareBeingDraggedId] =
      squareBeingReplaced.getAttribute("src");

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width,
    ];

    const validMove = validMoves.includes(squareBeingReplacedId);

    const isAColumnOfFour = checkForColumnOfFour(
      currentColorArrangement,
      setScoreDisplay
    );
    const isARowOfFour = checkForRowOfFour(
      currentColorArrangement,
      setScoreDisplay
    );
    const isAColumnOfThree = checkForColumnOfThree(
      currentColorArrangement,
      setScoreDisplay
    );
    const isARowOfThree = checkForRowOfThree(
      currentColorArrangement,
      setScoreDisplay
    );

    if (
      squareBeingReplacedId &&
      validMove &&
      (isAColumnOfFour || isAColumnOfThree || isARowOfFour || isARowOfThree)
    ) {
      setSquareBeingDragged(null);
      setSquareBeingReplaced(null);
    } else {
      currentColorArrangement[squareBeingReplacedId] =
        squareBeingReplaced.getAttribute("src");
      currentColorArrangement[squareBeingDraggedId] =
        squareBeingDragged.getAttribute("src");
      setCurrentColorArrangement([...currentColorArrangement]);
    }
  }
};
