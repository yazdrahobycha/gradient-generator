export const BEZIER_PRESETS = [
  { parameters: [0.3, 0.3, 0.7, 0.7], name: "Linear" },
  { parameters: [0.5, 0, 0.5, 1], name: "Ease" },
  { parameters: [0, 1, 1, 0], name: "Fun" },
];

export const DEFAULT_BEZIER_PRESET = BEZIER_PRESETS[0];

export const INITIAL_COLORS_STATES = (function () {
  const states = [
    { color: "#FF3DCE", active: true },
    { color: "#F94B06", active: true },
    { color: "#FFE666", active: false },
    { color: "#E20BBA", active: false },
    { color: "#4EDF00", active: false },
  ];
  states.forEach((entry) => {
    entry.id = crypto.randomUUID();
  });
  return states;
})();

export const SUPPORTED_COLOR_MODES = ["lrgb", "hsl", "hsv", "hcl", "lab"];

export const DEFAULT_COLOR_MODE = SUPPORTED_COLOR_MODES[4];

export const DEFAULT_ANGLE = 60;

export const DEFAULT_PRECISION_RANGE = [1, 20];

export const DEFAULT_PRECISION = 1;
