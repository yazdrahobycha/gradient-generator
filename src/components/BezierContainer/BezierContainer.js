import React from "react";
import { BezierCurveEditor } from "react-bezier-curve-editor";
import "react-bezier-curve-editor/lib/index.css";
const BEZIER_PRESETS = [
  { parameters: [0.3, 0.3, 0.7, 0.7], name: "Linear" },
  { parameters: [0.5, 0, 0.5, 1], name: "Ease" },
  { parameters: [0, 1, 1, 0], name: "Fun" },
];

function BezierContainer({ setBezierParams, bezierParam }) {
  return (
    <div>
      <BezierCurveEditor
        value={bezierParam}
        onChange={(bezier) => {
          console.log(bezier)
          setBezierParams(bezier);
        }}
      />
      <div>
        {BEZIER_PRESETS.map(({ name, parameters }) => {
          return (
            <button
            key={name}
              onClick={() => {
                console.log(parameters);
                setBezierParams(parameters);
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
