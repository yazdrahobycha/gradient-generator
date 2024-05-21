import chroma, { average } from "chroma-js";

export function createGradientBackground(colors, angle, mode) {
  const withInBetweenColors = chroma.scale(colors).mode(mode).colors(6);
  const inlineStyleObj = {
    backgroundImage: `linear-gradient(${angle}deg, ${withInBetweenColors
      .map((hexColor, i) => {
        const hslColor = chroma(hexColor).hsl();
        return `hsl(${Math.round(hslColor[0])}deg ${Math.round(
          hslColor[1] * 100
        )}% ${Math.round(hslColor[2] * 100)}%)`;
      })
      .join(", ")})`,
  };
  return inlineStyleObj;
}
