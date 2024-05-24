import React, { useContext, useState } from "react";
import { BezierCurveEditor } from "react-bezier-curve-editor";
import "react-bezier-curve-editor/lib/index.css";
import { BezierContext } from "../BezierProvider/BezierProvider";
import Button from "../Button/Button";
import { DEFAULT_BEZIER_PRESET, BEZIER_PRESETS } from "../../constants";

function BezierContainer() {
  const { bezier, handleBezierChange } = useContext(BezierContext);
  const [activePreset, setActivePreset] = useState(DEFAULT_BEZIER_PRESET.name);
  return (
    <div>
      <BezierCurveEditor
        value={bezier}
        onChange={(bezierInputValue) => {
          setActivePreset("idle");
          handleBezierChange(bezierInputValue);
        }}
      />
      <div>
        {BEZIER_PRESETS.map(({ name, parameters }) => {
          return (
            <Button
              isActive={activePreset === name}
              key={name}
              onClick={() => {
                setActivePreset(name);
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
