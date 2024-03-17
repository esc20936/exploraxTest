import React from "react";

type StyledButtonProps = {
  color?: string;
  shineColor?: string;
  children: string | JSX.Element | React.ReactNode;
  padding?: "xxs" | "xs" | "sm" | "md" | "lg" | string;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | string;
  borderRadius?: string;
  onPress?: () => void;
  style?: object;
  disabled?: boolean;
};

export default StyledButtonProps;
