import React from "react";
import GradientPreview from "../GradientPreview/GradientPreview";
import Options from "../Options/Options";
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
