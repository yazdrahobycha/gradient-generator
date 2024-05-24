import React, { useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
import ColorsProvider from "../ColorsProvider/ColorsProvider";
import ModeProvider from "../ModeProvider/ModeProvider";
import AngleProvider from "../AngleProvider/AngleProvider";
import PrecisionProvider from "../PrecisionProvider/PrecisionProvider";
import BezierProvider from "../BezierProvider/BezierProvider";
import Output from "../Output/Output";

function App() {
  const [gradientOutput, setGradientOutput] = useState("");
  return (
    <div>
      <ColorsProvider>
        <ModeProvider>
          <AngleProvider>
            <PrecisionProvider>
              <BezierProvider>
                <GradientPreview setGradientOutput={setGradientOutput} />
                <Options />
                <Output gradientOutput={gradientOutput} />
              </BezierProvider>
            </PrecisionProvider>
          </AngleProvider>
        </ModeProvider>
      </ColorsProvider>
    </div>
  );
}

export default App;
