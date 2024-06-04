import React, { useContext } from "react";
import Button from "../Button/Button";
import { GradientDataContext } from "../GradientDataProvider/GradientDataProvider";

function RandomizeButton() {
  const { randomizeOptions } = useContext(GradientDataContext);
  return <Button onClick={randomizeOptions}>Randomize!</Button>;
}

export default RandomizeButton;
