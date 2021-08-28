import { Mixins } from "@material-ui/core/styles/createMixins";
import { Palette } from "@material-ui/core/styles/createPalette";

export const createThemedMixins = (palette: Palette) =>
  ({
    toolbar: {
      minHeight: 73,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 73
      },
      "@media (min-width:600px)": {
        minHeight: 73
      }
    }
  } as Partial<Mixins>);
