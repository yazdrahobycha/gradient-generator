import React, { useState } from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
import ColorsProvider from "../ColorsProvider/ColorsProvider";
import ModeProvider from "../ModeProvider/ModeProvider";
import AngleProvider from "../AngleProvider/AngleProvider";
import PrecisionProvider from "../PrecisionProvider/PrecisionProvider";
import BezierProvider from "../BezierProvider/BezierProvider";
import GradientDataProvider from "../GradientDataProvider/GradientDataProvider";
import Output from "../Output/Output";

function App() {
  return (
    <GradientDataProvider>
      <GradientPreview />
      <Options />
      <Output />
    </GradientDataProvider>
  );
}

export default App;
