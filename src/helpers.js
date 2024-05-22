import chroma, { average } from "chroma-js";
import BezierEasing from "bezier-easing";

export function createGradientBackground(
  colors,
  angle,
  mode,
  bezierParam,
  presicion = 12
) {
  const easing = BezierEasing(...bezierParam);
  const withInBetweenColors = chroma.scale(colors).mode(mode).colors(presicion);

  const hslValuesForStyles = withInBetweenColors
    .map((hexColor, i) => {
      const hslColor = chroma(hexColor).hsl();
      const position = easing(i / (presicion - 1)) * 100;
      return `      hsl(${Math.round(hslColor[0])}deg ${Math.round(
        hslColor[1] * 100
      )}% ${Math.round(hslColor[2] * 100)}%) ${Math.round(position)}%`;
    })
    .join(",\n ");

  //const withInBetweenColors = chroma.scale(colors).mode(mode).colors(6);
  const inlineStyleObj = {
    backgroundImage: `linear-gradient(${angle}deg,\n ${hslValuesForStyles})`,
  };
  console.log(inlineStyleObj);
  return inlineStyleObj;
}
