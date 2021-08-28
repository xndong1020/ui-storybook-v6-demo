import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    display: "block",
    width: "400px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderRadius: "0.25rem",
    border: "1px solid",
    borderColor: "inherit",
    backgroundColor: "#fff",
  },

  small: { height: "2rem", fontSize: "1rem" },
  medium: { height: "2.5rem", fontSize: "1.5rem" },
  large: { height: "3rem", fontSize: "2rem" },
}));

export interface CustomInputProps {
  size?: string;
  placeholder: string;
}

const CustomInput = (props: CustomInputProps) => {
  const { size = "medium", ...rest } = props;
  const classes = useStyles();
  return (
    <input
      data-testid="input-id"
      className={clsx(classes.input, classes[size as keyof typeof classes])}
      {...rest}
    />
  );
};

export default CustomInput;
