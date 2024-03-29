/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { ScoreBoard } from "./components/ScoreBoard";
import { createBoard } from "./functions/createBoard";
import { candyColors } from "./constants";
import { moveIntoSquareBelow } from "./functions/moveBelow";
import {
  useColorContext,
  useDraggedSquareContext,
  useReplacedSquareContext,
  useScoreContext,
} from "./context";
import {
  checkForColumnOfFour,
  checkForRowOfFour,
  checkForColumnOfThree,
  checkForRowOfThree,
} from "./checkers";
import { dragStart, dragDrop, dragEnd } from "./functions/dragFunctions";

const App = () => {
  const { currentColorArrangement, setCurrentColorArrangement } =
    useColorContext();
  const { squareBeingDragged, setSquareBeingDragged } =
    useDraggedSquareContext();
  const { squareBeingReplaced, setSquareBeingReplaced } =
    useReplacedSquareContext();
  const { scoreDisplay, setScoreDisplay } = useScoreContext();

  useEffect(() => {
    createBoard(candyColors, setCurrentColorArrangement);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour(currentColorArrangement, setScoreDisplay);
      checkForRowOfFour(currentColorArrangement, setScoreDisplay);
      checkForColumnOfThree(currentColorArrangement, setScoreDisplay);
      checkForRowOfThree(currentColorArrangement, setScoreDisplay);
      moveIntoSquareBelow(currentColorArrangement, candyColors);
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveIntoSquareBelow,
    currentColorArrangement,
  ]);

  const handleDragEnd = () => {
    dragEnd(
      currentColorArrangement,
      squareBeingReplaced,
      squareBeingDragged,
      setScoreDisplay,
      setSquareBeingDragged,
      setSquareBeingReplaced,
      setCurrentColorArrangement
    );
  };

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            src={candyColor}
            alt={candyColor}
            data-id={index}
            draggable={true}
            onDragStart={(e) => dragStart(e, setSquareBeingDragged)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={(e) => dragDrop(e, setSquareBeingReplaced)}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
      <div className="display">
        <ScoreBoard score={scoreDisplay} />
      </div>
    </div>
  );
};

export default App;
