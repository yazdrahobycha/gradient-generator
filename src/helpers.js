import chroma, { average } from "chroma-js";

export function createGradientBackground(colors, angle) {
  //   const changedColors = colors.map((color) => {
  //     let changedColor = chroma(color).hsv();
  //     changedColor = chroma(
  //       changedColor[0],
  //       changedColor[1],
  //       changedColor[2],
  //       "hsv"
  //     );

  //     return changedColor;
  //   });
  //   const withInBetweenColors = changedColors.reduce((acc, item, i, arr) => {
  //     acc.push(item.hsl());
  //     if (i < arr.length - 1) {
  //       acc.push(chroma.average([item, arr[i + 1]]).hsl());
  //     }
  //     return acc;
  //   }, []);

  const withInBetweenColors = chroma.scale(colors).mode("hsv").colors(6);
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
