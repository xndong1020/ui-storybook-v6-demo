import { createButtonOverrides } from "./button";
import { createCardOverrides } from "./cards";
import { createThemedMixins } from "./mixins";
import { createGlobalOverrides } from "./global";
import { palette } from "./palette";
import { createTypographyOverrides } from "./typography";
import { ThemeOptions } from "@material-ui/core";

export const defaultOverrides: ThemeOptions = {
  palette,
  mixins: createThemedMixins(palette),
  overrides: {
    ...createTypographyOverrides(palette),
    ...createCardOverrides(palette),
    ...createButtonOverrides(palette),
    ...createGlobalOverrides(palette),
  },
};
