import chroma, { average } from "chroma-js";
import BezierEasing from "bezier-easing";

export function createGradientBackground(
  colors,
  angle,
  mode,
  bezierParam,
  precision
) {
  const precisionWithbaseColors = Number(precision) + colors.length;
  const easing = BezierEasing(...bezierParam);
  const withInBetweenColors = chroma
    .scale(colors)
    .mode(mode)
    .colors(precisionWithbaseColors);
  const hslValuesForStyles = withInBetweenColors
    .map((hexColor, i) => {
      const hslColor = chroma(hexColor).hsl();
      const position = easing(i / (precisionWithbaseColors - 1)) * 100;
      return `      hsl(${Math.round(hslColor[0])}deg ${Math.round(
        hslColor[1] * 100
      )}% ${Math.round(hslColor[2] * 100)}%) ${Math.round(position)}%`;
    })
    .join(",\n ");

  const inlineStyleObj = {
    backgroundImage: `linear-gradient(${angle}deg,\n ${hslValuesForStyles})`,
  };
  return inlineStyleObj;
}
