import { Overrides as CoreOverrides } from "@material-ui/core/styles/overrides";
import {
  ToggleButtonClassKey,
  ToggleButtonGroupClassKey,
} from "@material-ui/lab";
import { CSSProperties } from "@material-ui/styles";
import { Palette } from "@material-ui/core/styles/createPalette";

export interface Overrides extends CoreOverrides {
  // Define additional lab components here as needed....
  MuiToggleButton?:
    | Partial<
        Record<ToggleButtonClassKey, CSSProperties | (() => CSSProperties)>
      >
    | undefined;
  MuiToggleButtonGroup?:
    | Partial<
        Record<ToggleButtonGroupClassKey, CSSProperties | (() => CSSProperties)>
      >
    | undefined;
}

export const createButtonOverrides = (palette: Palette): Overrides => ({
  MuiButton: {
    root: {
      border: "none",
      textTransform: "none",
      boxShadow: "none",
      borderRadius: 6,
      height: "4.8rem",
      transition: "box-shadow 0s",
      fontSize: "1.4rem",
      padding: "1.5rem 3rem",
      fontWeight: 500,
      letterSpacing: "0.5px",
      "button&": {
        boxShadow: "none",
        padding: "1.5rem 3rem",
      },
      "button&:active": {
        // override default box shaddow because we need it for outline
        boxShadow: "0 0 0 0 rgba(0,0,0,0)",
      },
      "&:hover:active": {
        // use box shaddow for the blue outline
        boxShadow: `0 0 0 2px ${palette.info.dark}`,
      },
      "button&$disabled": {
        padding: "1.3rem 2.8rem",
        backgroundColor: palette.common.white,
        border: `2px solid ${palette.grey[400]}`,
        color: palette.grey[600],
        cursor: "not-allowed",
      },
      "button&:hover": {
        boxShadow: "0 0 0 0 rgba(0,0,0,0)",
        backgroundColor: "#eee",
      },
    },
    label: {
      lineHeight: 1,
    },
    sizeSmall: {
      height: "4rem",
      fontSize: "1.4rem",
      "button&": {
        padding: "1.1rem 1.6rem",
      },
    },
    containedPrimary: {
      "&:hover": {
        color: palette.primary.contrastText,
        backgroundColor: palette.primary.dark,
      },
    },
    containedSecondary: {
      color: palette.common.white,
      "&:hover": {
        color: palette.common.white,
        backgroundColor: palette.secondary.light,
      },
    },
    outlined: {
      borderStyle: "solid",
      "button&": {
        borderWidth: "0.2rem",
      },
      "button&:hover": {
        borderWidth: "0.2rem",
      },
      "@media (hover: hover)": {
        "&:hover": {
          boxShadow: "none",
          backgroundColor: palette.secondary.main,
          color: palette.common.white,
        },
      },
    },
    outlinedPrimary: {
      "&:hover": {
        borderColor: palette.primary.main,
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
    outlinedSecondary: {
      borderColor: palette.secondary.main,
      backgroundColor: "transparent",
      color: palette.secondary.main,
      "&:hover": {
        borderColor: palette.secondary.main,
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
      },
      "&:active": {
        borderColor: palette.secondary.main,
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
      },
      "@media (max-width: 959.95px)": {
        "&:active": {
          borderColor: palette.secondary.main,
          backgroundColor: "transparent",
          color: palette.secondary.main,
        },
        "&:focus": {
          borderColor: palette.secondary.main,
          backgroundColor: "transparent",
          color: palette.secondary.main,
        },
        "&:hover": {
          //FIX IOS CLICK ISSUE
          borderColor: palette.secondary.main,
          backgroundColor: `transparent !important`,
          color: `${palette.secondary.main} !important`,
        },
      },
    },
    text: {
      color: palette.info.dark,
      "&:hover": {
        backgroundColor: palette.common.black,
        textDecoration: "underline",
      },
      "&:hover:active": {
        boxShadow: "none",
      },
    },
  },
  MuiToggleButton: {
    root: {
      textTransform: "none",
      borderRadius: 6,
      letterSpacing: 0.47,
      boxShadow: "none",
      border: `1px solid #4b5a6e`,
      color: palette.greyscale.darkest,
      padding: "1.5rem 2.9rem",
      "&$selected": {
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
      },
      "&$disabled": {
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
      },
      "&:active": {
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
      },
      "&.Mui-selected:hover": {
        backgroundColor: `${palette.secondary.main} !important`,
        color: palette.common.white,
      },
      "&:hover": {
        backgroundColor: `${palette.background.default}`,
        color: palette.common.black,
      },
      "& span": {
        fontSize: "1.4rem",
        fontWeight: 500,
        lineHeight: "1.4rem",
      },
    },
  },
  MuiToggleButtonGroup: {
    root: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(15.5rem, 1fr))",
      columnGap: "1.6rem",
      rowGap: "1.6rem",
    },
    vertical: {
      display: "grid",
      gridTemplateColumns: "minmax(15.5rem, 1fr)",
      rowGap: "1.6rem",
    },
    groupedHorizontal: {
      "&:not(:last-child)": {
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
      },
      "&:not(:first-child)": {
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        borderLeft: `1px solid #768191`,
      },
    },
  },
});
