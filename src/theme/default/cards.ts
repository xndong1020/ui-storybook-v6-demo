import { Overrides } from "@material-ui/core/styles/overrides";
import { Palette } from "@material-ui/core/styles/createPalette";

export const createCardOverrides = (palette: Palette): Overrides => ({
  MuiCard: {
    root: {
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.05)"
    }
  }
});
