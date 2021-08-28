import { ThemeOptions } from '@material-ui/core/styles';
import * as _material_ui_styles from '@material-ui/styles';

interface ButtonProps {
    variant?: string;
    children: JSX.Element | string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface CustomInputProps {
    size?: string;
    placeholder: string;
}
declare const CustomInput: (props: CustomInputProps) => JSX.Element;

declare const sharedStyles: _material_ui_styles.StyleRules<{}, "buttonNoDrag">;

declare const Themes: {
    Default: ThemeOptions;
};

declare enum TypographyVariant {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    subtitle1 = "subtitle1",
    subtitle2 = "subtitle2",
    body1 = "body1",
    body2 = "body2",
    caption = "caption",
    button = "button",
    overline = "overline"
}

export { Button, CustomInput, Themes, TypographyVariant, sharedStyles };
