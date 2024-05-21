import chroma, { average } from "chroma-js";
import BezierEasing from "bezier-easing";

// export function createGradientBackground(colors, angle, mode, bezierParam) {
//   const withInBetweenColors = chroma.scale(colors).mode(mode).colors(6);
//   const inlineStyleObj = {
//     backgroundImage: `linear-gradient(${angle}deg, ${withInBetweenColors
//       .map((hexColor, i) => {
//         const hslColor = chroma(hexColor).hsl();
//         return `hsl(${Math.round(hslColor[0])}deg ${Math.round(
//           hslColor[1] * 100
//         )}% ${Math.round(hslColor[2] * 100)}%)`;
//       })
//       .join(", ")})`,
//   };
//   return inlineStyleObj;
// }

export function createGradientBackground(
  colors,
  angle,
  mode,
  bezierParam,
  presicion = 12
) {
  console.log(bezierParam);

  const easing = BezierEasing(...bezierParam);
  const withInBetweenColors = chroma.scale(colors).mode(mode).colors(presicion);

  // for (let i = 0; i < presicion; i++) {
  //   // Calculate the eased step position
  //   let t = easing(i / (presicion - 1));

  //   // Get the color corresponding to the eased position
  //   withInBetweenColors.push(scale(t).hex());
  // }
  console.log(colors);
  console.log(withInBetweenColors);

  const hslValuesForStyles = withInBetweenColors
    .map((hexColor, i) => {
      const hslColor = chroma(hexColor).hsl();
      const position = easing(i / (presicion - 1)) * 100;
      return `hsl(${Math.round(hslColor[0])}deg ${Math.round(
        hslColor[1] * 100
      )}% ${Math.round(hslColor[2] * 100)}%) ${Math.round(position)}%`;
    })
    .join(", ");

  //const withInBetweenColors = chroma.scale(colors).mode(mode).colors(6);
  const inlineStyleObj = {
    backgroundImage: `linear-gradient(${angle}deg, ${hslValuesForStyles})`,
  };
  console.log(inlineStyleObj);
  return inlineStyleObj;
}
