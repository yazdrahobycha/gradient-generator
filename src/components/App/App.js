import React, { useCallback, useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
import ColorsProvider from "../ColorsProvider/ColorsProvider";
import ModeProvider from "../ModeProvider/ModeProvider";

function App() {
  const [angle, setAngle] = useState(60);
  const [bezierParam, setBezierParams] = useState([0.3, 0.3, 0.7, 0.7]);
  const [precision, setPrecision] = useState(1);

  return (
    <div>
      <ColorsProvider>
        <ModeProvider>
          <GradientPreview
            bezierParam={bezierParam}
            angle={angle}
            precision={precision}
          />
          <Options
            angle={angle}
            setAngle={setAngle}
            bezierParam={bezierParam}
            setBezierParams={setBezierParams}
            precision={precision}
            setPrecision={setPrecision}
          />
        </ModeProvider>
      </ColorsProvider>
    </div>
  );
}

export default App;
