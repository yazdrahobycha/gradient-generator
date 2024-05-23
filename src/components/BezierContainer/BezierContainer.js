import React, { useContext } from "react";
import { BezierCurveEditor } from "react-bezier-curve-editor";
import "react-bezier-curve-editor/lib/index.css";
import { BezierContext } from "../BezierProvider/BezierProvider";
const BEZIER_PRESETS = [
  { parameters: [0.3, 0.3, 0.7, 0.7], name: "Linear" },
  { parameters: [0.5, 0, 0.5, 1], name: "Ease" },
  { parameters: [0, 1, 1, 0], name: "Fun" },
];

function BezierContainer() {
  const { bezier, handleBezierChange } = useContext(BezierContext);
  return (
    <div>
      <BezierCurveEditor
        value={bezier}
        onChange={(bezierInputValue) => {
          handleBezierChange(bezierInputValue);
        }}
      />
      <div>
        {BEZIER_PRESETS.map(({ name, parameters }) => {
          return (
            <button
              key={name}
              onClick={() => {
                handleBezierChange(parameters);
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BezierContainer;
