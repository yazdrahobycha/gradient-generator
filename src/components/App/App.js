import React, { useCallback, useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
import ColorsProvider from "../ColorsProvider/ColorsProvider";
import ModeProvider from "../ModeProvider/ModeProvider";
import AngleProvider from "../AngleProvider/AngleProvider";

function App() {
  const [bezierParam, setBezierParams] = useState([0.3, 0.3, 0.7, 0.7]);
  const [precision, setPrecision] = useState(1);

  return (
    <div>
      <ColorsProvider>
        <ModeProvider>
          <AngleProvider>
            <GradientPreview bezierParam={bezierParam} precision={precision} />
            <Options
              bezierParam={bezierParam}
              setBezierParams={setBezierParams}
              precision={precision}
              setPrecision={setPrecision}
            />
          </AngleProvider>
        </ModeProvider>
      </ColorsProvider>
    </div>
  );
}

export default App;
