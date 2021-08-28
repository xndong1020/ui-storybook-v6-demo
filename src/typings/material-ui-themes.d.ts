// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { CreateCSSProperties } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ICustomizedThemeType {}

  interface Theme extends ICustomizedThemeType {}

  interface ThemeOptions extends ICustomizedThemeType {}
}

declare module "@material-ui/core/styles/createPalette" {
  interface TypeBackground {
    default: string;
    paper: string;
  }

  interface CommonColor {
    white: string;
    black: string;
  }

  interface PaletteColor {
    dark: string;
    darker?: string;
    darkest?: string;
    main: string;
    light: string;
    lighter?: string;
    lightest?: string;
    contrastText?: string;
  }

  interface HeaderAndFooterColor {
    backgroundColor: string;
    textColor: string;
    logoColor: string;
  }
  interface Palette {
    background: TypeBackground;
    primary: PaletteColor;
    secondary: PaletteColor;
    success: PaletteColor;
    warning: PaletteColor;
    greyscale: PaletteColor;
    grey: any;
    common: CommonColor;

    notification: NotificationPalette;
    chartSet1: ChartPalette;
    chartSet2: Partial<ChartPalette>;
    chartSet3: Partial<ChartPalette>;
    success: PaletteColor;
    error: PaletteColor;
    alert: PaletteColor;
    info: PaletteColor;
    footer: HeaderAndFooterColor;
    header: HeaderAndFooterColor;
  }

  interface NotificationPalette {
    red: string;
  }
  interface ChartPalette {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    color6: string;
    color7: string;
    color8: string;
    color9: string;
    color10: string;
    color11: string;
    color12: string;
    color13: string;
    color14: string;
    color15: string;
  }
}
