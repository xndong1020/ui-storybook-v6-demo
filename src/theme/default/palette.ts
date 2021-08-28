import { Palette } from "@material-ui/core/styles/createPalette";

export const palette = {
  primary: {
    main: "#fbc02d",
    light: "#fae5b2",
    dark: "#e0a102",
    contrastText: "#263238",
  },
  secondary: {
    main: "#263238",
    light: "#4b5a6e",
    dark: "#000",
    contrastText: "#263238",
  },
  greyscale: {
    darkest: "#263238", // button label
    darker: "#2d2f33", // heading 1
    dark: "#2d2f33", // heading 1
    main: "#4f5d71", // paragraph 1 color
    light: "#4b5a6e", // paragraph 2 color
    lighter: "#c3c8cf", // grayscale 2
    lightest: "#f0efef", // grascale 1
  },
  success: {
    light: "#cbe0cf",
    main: "#2e8540",
    dark: "#FFF",
  },
  warning: {
    light: "#fae5b2",
    main: "#fbc02d",
    dark: "#FFF",
  },
  info: {
    light: "#a1c7eb",
    main: "#1373cc",
    dark: "#0068c8",
  },
  error: {
    light: "#f3a6a6",
    main: "#e31c3d",
    dark: "#FFF",
  },
  background: {
    default: "#f8f9f9",
    paper: "#FFFFFF",
  },
  grey: {
    50: "#f8f9f9", // background
    100: "#f0efef", // grascale 1
    200: "#f0efef", // grascale 1
    300: "#909699", // inactive button text
    400: "#ededed", // inactive button border

    500: "#dde1e4", // inactive button border
    600: "#c3c8cf", // grascale 2
    700: "#515f73", // grascale 2

    800: "#4b5a6e", // paragraph 2 color
    900: "#4f5d71", // paragraph 1 color
    A100: "#2d2f33", // heading 1
    A200: "#2d2f33", // heading 1
    A400: "#2d2f33", // heading 1
    A700: "#263238", // button label
  },
  common: {
    white: "#ffffff",
    black: "#000000",
  },
  chartSet1: {
    color1: "#48b4ae",
    color2: "#bbe1df",
    color3: "#fbc02d",
    color4: "#fae5b2",
    color5: "#f2565d",
    color6: "#f6c1c3",
    color7: "#8cd7f2",
    color8: "#d3edf7",
    color9: "#3b4453",
    color10: "#dcdeec",
    color11: "#ffb38f",
    color12: "#1da7de",
    color13: "#e8467e",
    color14: "#be2fdd",
    color15: "#707e90",
  },
  chartSet2: {
    color1: "#535e6c",
    color2: "#8cd7f2",
    color3: "#dbdfec",
    color4: "#7e3c82",
  },
  chartSet3: {
    color1: "#e5e5e5",
    color2: "#979797",
    color3: "#0168C7",
    color4: "#E4E4EB",
    color5: "#cd2026",
    color6: "#e5f4f2",
  },
  header: {
    logoColor: "#263238",
  },
  footer: {
    logoColor: "#263238",
    backgroundColor: "#ffffff",
    textColor: "#263238",
  },
} as Palette;
