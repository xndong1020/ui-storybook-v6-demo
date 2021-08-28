import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

export interface ButtonProps {
  variant?: string;
  children: JSX.Element | string;
}

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "4px",
    cursor: "pointer",
  },

  primary: { backgroundColor: "#008CBA" } /* Blue */,
  secondary: { backgroundColor: "#e7e7e7", color: "black" } /* Gray */,
  success: { backgroundColor: "#4CAF50" } /* Green */,
  danger: { backgroundColor: "#f44336" } /* Red */,
}));

const Button = (props: ButtonProps) => {
  const { variant = "primary", children, ...rest } = props;
  const classes = useStyles();
  return (
    <button
      data-testid="btn-id"
      className={clsx(classes.button, [
        classes[variant as keyof typeof classes],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
