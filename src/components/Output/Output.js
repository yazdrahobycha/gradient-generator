import React, { useEffect, useState } from "react";

import { useClipboard } from "../../hooks/useClipboard.hook";
import { useAutoToggle } from "../../hooks/useAutoToggle.hook";
import Button from "../Button/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Output({ gradientOutput }) {
  const [textInClipboard, addToClipboard] = useClipboard();
  const [isCssJustCopied, setIsCssJustCopied] = useAutoToggle(false, 2000);
  const [isUrlJustCopied, setIsUrlJustCopied] = useAutoToggle(false, 2000);

  return (
    <div>
      <SyntaxHighlighter language="css" style={dracula}>
        {gradientOutput}
      </SyntaxHighlighter>
      <Button
        disabled={isCssJustCopied}
        onClick={() => {
          setIsCssJustCopied();
          addToClipboard(gradientOutput);
        }}
      >
        {isCssJustCopied ? "Copied!" : "Copy CSS"}
      </Button>
      <Button
        disabled={isUrlJustCopied}
        onClick={() => {
          setIsUrlJustCopied();
          addToClipboard(gradientOutput);
        }}
      >
        {isCssJustCopied ? "Copied!" : "Copy URL"}
      </Button>
    </div>
  );
}

export default Output;
