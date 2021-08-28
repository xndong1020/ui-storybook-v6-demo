import { Story, Meta } from "@storybook/react";
import { Button } from "@material-ui/core";
import type { ButtonProps } from "@material-ui/core";
import { BUTTON_COLORS, BUTTON_VARIANT } from "../storybook/argTypes";
import { ButtonVariant } from "../storybook/enums";

export default {
  title: "Nicole UI/Buttons",
  component: Button,
  argTypes: {
    color: BUTTON_COLORS,
    variant: BUTTON_VARIANT,
    disabled: { control: { type: "boolean" } },
    onClick: { action: "clicked " },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const PrimaryContained = Template.bind({});

PrimaryContained.args = {
  color: "primary",
  variant: ButtonVariant.Contained,
} as ButtonProps;

export const PrimaryContainedDisabled = Template.bind({});

PrimaryContainedDisabled.args = {
  color: "primary",
  disabled: true,
  variant: ButtonVariant.Contained,
} as ButtonProps;

export const PrimaryOutlined = Template.bind({});

PrimaryOutlined.args = {
  color: "primary",
  variant: ButtonVariant.Outlined,

  children: "Button",
} as ButtonProps;

export const SecondaryContained = Template.bind({});

SecondaryContained.args = {
  color: "secondary",
  variant: ButtonVariant.Contained,
} as ButtonProps;

export const SecondaryOutlined = Template.bind({});

SecondaryOutlined.args = {
  color: "secondary",
  variant: ButtonVariant.Outlined,
} as ButtonProps;
