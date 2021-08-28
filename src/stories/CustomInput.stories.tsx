import React from "react";
import { Story } from "@storybook/react";
import CustomInput, {
  CustomInputProps,
} from "../components/CustomInput/CustomInput";

export default {
  title: "Form/CustomInput",
  component: CustomInput,
};

// export const Medium = () => (
//   <CustomInput size="medium" placeholder="medium input" />
// );
// export const Large = () => (
//   <CustomInput size="large" placeholder="large input" />
// );
// export const Small = () => (
//   <CustomInput size="small" placeholder="small input" />
// );

const Template: Story<CustomInputProps> = (args) => <CustomInput {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "medium input",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "large input",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "small input",
};

Medium.storyName = "Medium Input";
Large.storyName = "Large Input";
Small.storyName = "Small Input";
