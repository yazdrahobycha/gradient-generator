import React, { useState } from "react";

export function useClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
