import { createTheme, ThemeOptions } from "@material-ui/core/styles";
import { defaultOverrides } from "./default";
import { sharedStyles } from "./shared";

const createCustomizedTheme = (
  partialOverrides: Partial<ThemeOptions>
): ThemeOptions => {
  return createTheme({
    ...partialOverrides,
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
      MuiFormControl: {
        variant: "outlined",
      },
      MuiButton: {
        variant: "outlined",
      },
    },
    typography: {
      fontSize: 10,
      htmlFontSize: 10,
      fontFamily: ["Cera Pro", "sans-serif"].join(","),
    },
    spacing: 8,
  });
};

export const Themes = {
  Default: createCustomizedTheme(defaultOverrides),
};

export { sharedStyles };
