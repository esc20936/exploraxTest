import React from "react";

type StyledButtonProps = {
    color?: string;
    shineColor?: string;
    children: string | JSX.Element | React.ReactNode;
    padding?: "xxs"|"xs"|"sm"| "md" | "lg"|string;
    borderRadius?: string;
}


export default StyledButtonProps;