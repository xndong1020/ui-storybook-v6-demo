import React from "react";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button/Button";

export default {
  title: "General/Button",
  component: Button,
  args: {
    variant: "primary",
    children: "Primary",
  },
};

// export const Primary = () => <Button variant="primary">Primary</Button>;
// export const Secondary = () => <Button variant="secondary">Secondary</Button>;
// export const Success = () => <Button variant="success">Success</Button>;
// export const Danger = () => <Button variant="danger">Danger</Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger",
};

Primary.storyName = "Primary Button";
Secondary.storyName = "Secondary Button";
Success.storyName = "Success Button";
Danger.storyName = "Danger Button";
