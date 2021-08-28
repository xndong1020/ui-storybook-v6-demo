import { ButtonColor, ButtonVariant } from "./enums";

export const BUTTON_VARIANT = {
  control: {
    type: "select",
    options: [
      ButtonVariant.Text,
      ButtonVariant.Outlined,
      ButtonVariant.Contained,
    ],
  },
};

export const BUTTON_COLORS = {
  control: {
    type: "select",
    options: [ButtonColor.Primary, ButtonColor.Secondary],
  },
};
