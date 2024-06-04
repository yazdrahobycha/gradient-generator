import chroma from "chroma-js";
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
      // fix for the chroma bug (if the color all black)
      // the first value of hsl appears to be NaN for some reason
      if (isNaN(hslColor[0])) {
        hslColor[0] = 0;
      }
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

export function getRandomCubicBezier() {
  // Generate random control points, each rounded to three decimal places
  const p1x = parseFloat(Math.random().toFixed(3));
  const p1y = parseFloat(Math.random().toFixed(3));
  const p2x = parseFloat(Math.random().toFixed(3));
  const p2y = parseFloat(Math.random().toFixed(3));

  // Return the control points as an array
  return [p1x, p1y, p2x, p2y];
}
