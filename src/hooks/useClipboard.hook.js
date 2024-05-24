import React, { useState } from "react";

export function useClipboard() {
  const [textInClipboard, setTextInClipboard] = useState("");

  function copyToClipboard(text) {
    setTextInClipboard(text);
    navigator.clipboard
      .writeText(textInClipboard)
      .then(() => {
        console.log("copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  return [textInClipboard, copyToClipboard];
}
