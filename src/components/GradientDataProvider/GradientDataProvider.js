import React, { createContext, useState, useContext } from "react";
import ColorsProvider from "../ColorsProvider/ColorsProvider";
import ModeProvider from "../ModeProvider/ModeProvider";
import AngleProvider from "../AngleProvider/AngleProvider";
import PrecisionProvider from "../PrecisionProvider/PrecisionProvider";
import BezierProvider from "../BezierProvider/BezierProvider";

function GradientDataProvider() {
  return (
    <ColorsProvider>
      <ModeProvider>
        <AngleProvider>
          <PrecisionProvider>
            <BezierProvider></BezierProvider>
          </PrecisionProvider>
        </AngleProvider>
      </ModeProvider>
    </ColorsProvider>
  );
}

export default GradientDataProvider;
