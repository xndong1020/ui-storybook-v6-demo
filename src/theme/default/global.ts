import { Palette } from "@material-ui/core/styles/createPalette";

import CeraProBlack from "../../assets/fonts/CeraPro-Black.woff";
import CeraProBlackItalic from "../../assets/fonts/CeraPro-BlackItalic.woff";
import CeraProBold from "../../assets/fonts/CeraPro-Bold.woff";
import CeraProBoldItalic from "../../assets/fonts/CeraPro-BoldItalic.woff";
import CeraProItalic from "../../assets/fonts/CeraPro-Italic.woff";
import CeraProLight from "../../assets/fonts/CeraPro-Light.woff";
import CeraProLightItalic from "../../assets/fonts/CeraPro-LightItalic.woff";
import CeraProMedium from "../../assets/fonts/CeraPro-Medium.woff";
import CeraProMediumItalic from "../../assets/fonts/CeraPro-MediumItalic.woff";
import CeraProRegular from "../../assets/fonts/CeraPro-Regular.woff";
import CeraProThin from "../../assets/fonts/CeraPro-Thin.woff";
import CeraProThinItalic from "../../assets/fonts/CeraPro-ThinItalic.woff";

////////////////////////////////////////////////////////////////
// Cera Pro
//
// 100(Thin), 300(Light), 400(Regular),
// 500(Meidum), 700(Bold), 900(Black)
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
//
////////////////////////////////////////////////////////////////
const ceraProCommon = {
  fontFamily: "Cera Pro",
};

const ceraProRegular = {
  ...ceraProCommon,
  fontWeight: 400, // regular
  src: `url('${CeraProRegular}') format('woff');`,
};
const ceraProItalic = {
  ...ceraProCommon,
  fontWeight: 400, //regular
  fontStyle: "italic",
  src: `url('${CeraProItalic}') format('woff');`,
};

const ceraProThin = {
  ...ceraProCommon,
  fontWeight: 100, // thin
  src: `url('${CeraProThin}') format('woff');`,
};
const ceraProThinItalic = {
  ...ceraProCommon,
  fontWeight: 100, //thin
  fontStyle: "italic",
  src: `url('${CeraProThinItalic}') format('woff');`,
};

const ceraProLight = {
  ...ceraProCommon,
  fontWeight: 300, //light
  src: `url('${CeraProLight}') format('woff');`,
};
const ceraProLightItalic = {
  ...ceraProCommon,
  fontWeight: 300, //thin
  fontStyle: "italic",
  src: `url('${CeraProLightItalic}') format('woff');`,
};

const ceraProMedium = {
  ...ceraProCommon,
  fontWeight: 500, //medium
  src: `url('${CeraProMedium}') format('woff');`,
};
const ceraProMediumItalic = {
  ...ceraProCommon,
  fontWeight: 500, //medium
  fontStyle: "italic",
  src: `url('${CeraProMediumItalic}') format('woff');`,
};

const ceraProBold = {
  ...ceraProCommon,
  fontWeight: 700, //bold
  src: `url('${CeraProBold}') format('woff');`,
};
const ceraProBoldItalic = {
  ...ceraProCommon,
  fontWeight: 700, //bold
  fontStyle: "italic",
  src: `url('${CeraProBoldItalic}') format('woff');`,
};

const ceraProBlack = {
  ...ceraProCommon,
  fontWeight: 900, //black
  src: `url('${CeraProBlack}') format('woff');`,
};
const ceraProBlackItalic = {
  ...ceraProCommon,
  fontWeight: 900, //black
  fontStyle: "italic",
  src: `url('${CeraProBlackItalic}') format('woff');`,
};

export const createGlobalOverrides = (palette: Palette) => ({
  MuiCssBaseline: {
    "@global": {
      "@font-face": [
        ceraProRegular,
        ceraProItalic,
        ceraProThin,
        ceraProThinItalic,
        ceraProLight,
        ceraProLightItalic,
        ceraProMedium,
        ceraProMediumItalic,
        ceraProBold,
        ceraProBoldItalic,
        ceraProBlack,
        ceraProBlackItalic,
      ],
      html: {
        fontSize: 10,
        scrollBehavior: "smooth",
        // https://github.com/mui-org/material-ui/issues/22423
        "-webkit-text-size-adjust": "100%",
      },
    },
  } as any,
});
