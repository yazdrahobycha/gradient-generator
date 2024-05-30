import React, { useEffect, useState } from "react";

import { useClipboard } from "../../hooks/useClipboard.hook";
import { useAutoToggle } from "../../hooks/useAutoToggle.hook";
import Button from "../Button/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useGradientData } from "../GradientDataProvider/GradientDataProvider";

function Output() {
  const { getCssOutput, getUrlOutput } = useGradientData();
  const [isCssJustCopied, setIsCssJustCopied] = useAutoToggle(false, 2000);
  const [isUrlJustCopied, setIsUrlJustCopied] = useAutoToggle(false, 2000);

  const codeString = `.element {\n    background-image: ${
    getCssOutput().backgroundImage
  }\n}`;
  return (
    <div>
      <SyntaxHighlighter language="css" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
      <Button
        disabled={isCssJustCopied}
        onClick={() => {
          setIsCssJustCopied();
          useClipboard(codeString);
        }}
      >
        {isCssJustCopied ? "Copied!" : "Copy CSS"}
      </Button>
      <Button
        disabled={isUrlJustCopied}
        onClick={() => {
          setIsUrlJustCopied();
          console.log();
          useClipboard(getUrlOutput());
        }}
      >
        {isUrlJustCopied ? "Copied!" : "Copy URL"}
      </Button>
    </div>
  );
}

export default Output;
