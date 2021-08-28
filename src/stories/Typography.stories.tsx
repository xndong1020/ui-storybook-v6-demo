import { Story, Meta } from "@storybook/react";
import { Typography, TypographyProps } from "@material-ui/core";
import { TypographyVariant } from "../enums/TypographyVariant";

export default {
  title: "Nicole UI/Typography",
  component: Typography,
  argTypes: {},
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args} display="block" gutterBottom>
    The quick brown fox jumps over lazy dog
  </Typography>
);

export const H1 = Template.bind({});

H1.args = {
  variant: TypographyVariant.h1,
};

export const H2 = Template.bind({});

H2.args = {
  variant: TypographyVariant.h2,
};

export const H3 = Template.bind({});

H3.args = {
  variant: TypographyVariant.h3,
};

export const H4 = Template.bind({});

H4.args = {
  variant: TypographyVariant.h4,
};

export const H5 = Template.bind({});

H5.args = {
  variant: TypographyVariant.h5,
};

export const H6 = Template.bind({});

H6.args = {
  variant: TypographyVariant.h6,
};

export const subtitle1 = Template.bind({});

subtitle1.args = {
  variant: TypographyVariant.subtitle1,
};

export const subtitle2 = Template.bind({});

subtitle2.args = {
  variant: TypographyVariant.subtitle2,
};

export const body1 = Template.bind({});

body1.args = {
  variant: TypographyVariant.body1,
};

export const body2 = Template.bind({});

body2.args = {
  variant: TypographyVariant.body2,
};

export const caption = Template.bind({});

caption.args = {
  variant: TypographyVariant.caption,
};

export const button = Template.bind({});

button.args = {
  variant: TypographyVariant.button,
};

export const overline = Template.bind({});

overline.args = {
  variant: TypographyVariant.overline,
};
