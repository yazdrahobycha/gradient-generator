import React, { useCallback, useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";

function App() {
  const [colors, setColors] = useState([
    "#FF3DCE",
    "#F94B06",
    "#FFE666",
    "#E20BBA",
    "#4EDF00",
  ]);
  const [angle, setAngle] = useState(60);

  return (
    <div>
      <GradientPreview colors={colors} angle={angle} />
      <Options
        setColors={setColors}
        colors={colors}
        angle={angle}
        setAngle={setAngle}
      />
    </div>
  );
}

export default App;
