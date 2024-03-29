import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  ColorProvider,
  DraggedSquareProvider,
  ReplacedSquareProvider,
  ScoreProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <DraggedSquareProvider>
        <ReplacedSquareProvider>
          <ScoreProvider>
            <App />
          </ScoreProvider>
        </ReplacedSquareProvider>
      </DraggedSquareProvider>
    </ColorProvider>
  </React.StrictMode>
);
