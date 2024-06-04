import React, { useContext, useState } from "react";
import { BezierCurveEditor } from "react-bezier-curve-editor";
import "react-bezier-curve-editor/lib/index.css";
import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";
import Button from "../Button/Button";
import { BEZIER_PRESETS } from "../../constants";

function BezierContainer() {
  const { bezier, handleBezierChange } = useContext(GradientDataContext);
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
            <Button
              isActive={bezier.every(
                (presetPoint, i) => presetPoint === parameters[i]
              )}
              key={name}
              onClick={() => {
                handleBezierChange(parameters);
              }}
            >
              {name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default BezierContainer;
