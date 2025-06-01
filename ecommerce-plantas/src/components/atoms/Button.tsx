// src/components/atoms/Button.tsx
import React from "react";
import { Button as MUIButton, ButtonProps as MUIButtonProps } from "@mui/material";

type ColorVariant = "primary" | "secondary";

interface Props extends MUIButtonProps {
  colorVariant: ColorVariant;
}

const Button = ({ colorVariant, ...props }: Props) => {
  const color = colorVariant === "secondary" ? "primary" : "secondary";
  return <MUIButton color={color} variant="contained" {...props} />;
};

export default Button;



