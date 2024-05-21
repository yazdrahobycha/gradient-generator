import React, { useCallback, useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
const initialColorsState = [
  { color: "#FF3DCE", active: true },
  { color: "#F94B06", active: true },
  { color: "#FFE666", active: false },
  { color: "#E20BBA", active: false },
  { color: "#4EDF00", active: false },
];
initialColorsState.forEach((entry) => {
  entry.id = crypto.randomUUID();
});

function App() {
  const [colors, setColors] = useState(initialColorsState);
  const [mode, setMode] = useState("lab");
  const [angle, setAngle] = useState(60);
  const [bezierParam, setBezierParams] = useState([0.5, 0.5, 0.6, 1]);

  return (
    <div>
      <GradientPreview bezierParam={bezierParam} colors={colors} angle={angle} mode={mode} />
      <Options
        setColors={setColors}
        colors={colors}
        angle={angle}
        setAngle={setAngle}
        mode={mode}
        setMode={setMode}
        bezierParam={bezierParam}
        setBezierParams={setBezierParams}
      />
    </div>
  );
}

export default App;
