import React, { useCallback, useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
import ColorsProvider from "../ColorsProvider/ColorsProvider";

function App() {
  const [mode, setMode] = useState("lab");
  const [angle, setAngle] = useState(60);
  const [bezierParam, setBezierParams] = useState([0.3, 0.3, 0.7, 0.7]);
  const [precision, setPrecision] = useState(1);

  return (
    <div>
      <ColorsProvider>
        <GradientPreview
          bezierParam={bezierParam}
          angle={angle}
          mode={mode}
          precision={precision}
        />
        <Options
          angle={angle}
          setAngle={setAngle}
          mode={mode}
          setMode={setMode}
          bezierParam={bezierParam}
          setBezierParams={setBezierParams}
          precision={precision}
          setPrecision={setPrecision}
        />
      </ColorsProvider>
    </div>
  );
}

export default App;
