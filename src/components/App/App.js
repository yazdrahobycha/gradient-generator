import React, { useCallback, useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
import ColorsProvider from "../ColorsProvider/ColorsProvider";
import ModeProvider from "../ModeProvider/ModeProvider";
import AngleProvider from "../AngleProvider/AngleProvider";
import PrecisionProvider from "../PrecisionProvider/PrecisionProvider";
import BezierProvider from "../BezierProvider/BezierProvider";

function App() {
  return (
    <div>
      <ColorsProvider>
        <ModeProvider>
          <AngleProvider>
            <PrecisionProvider>
              <BezierProvider>
                <GradientPreview />
                <Options />
              </BezierProvider>
            </PrecisionProvider>
          </AngleProvider>
        </ModeProvider>
      </ColorsProvider>
    </div>
  );
}

export default App;
