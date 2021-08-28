import { Overrides } from "@material-ui/core/styles/overrides";
import { Palette } from "@material-ui/core/styles/createPalette";

////////////////////////////////////////////////////////////////
// Cera Pro
//
// 100(Thin), 300(Light), 400(Regular),
// 500(Meidum), 700(Bold), 900(Black)
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
//
////////////////////////////////////////////////////////////////
export const createTypographyOverrides = (palette: Palette): Overrides => ({
  MuiTypography: {
    h1: {
      fontSize: "4.2rem",
      lineHeight: 1.14,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 500
    },
    h2: {
      fontSize: "2.4rem",
      lineHeight: 1.33,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 500
    },
    h3: {
      fontSize: "2rem",
      lineHeight: 1.2,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 500
    },
    h4: {
      fontSize: "1.8rem",
      lineHeight: 1.33,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 500
    },
    h5: {
      fontSize: "1.6rem",
      lineHeight: 2,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 500
    },
    h6: {
      fontSize: "1.6rem",
      lineHeight: 2,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 500
    },
    subtitle1: {
      fontSize: "1.6rem",
      lineHeight: 1.5,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 500
    },
    subtitle2: {
      fontSize: "1.6rem",
      lineHeight: 2,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 400
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: 1.5,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 400
    },
    body2: {
      fontSize: "1.4rem",
      lineHeight: 1.71,
      color: palette.greyscale.darkest,
      letterSpacing: "normal",
      fontWeight: 400
    },
    button: {
      fontSize: "1.4rem",
      lineHeight: "normal",
      color: palette.greyscale.darkest,
      letterSpacing: 0.47,
      fontWeight: 500
    },
    overline: {
      fontSize: "1.4rem",
      lineHeight: "normal",
      color: palette.greyscale.darkest,
      letterSpacing: 0.47,
      fontWeight: 500
    },
    caption: {
      fontSize: "1.4rem",
      lineHeight: "normal",
      color: palette.greyscale.darkest,
      letterSpacing: 0.47,
      fontWeight: 500
    }
  }
});
