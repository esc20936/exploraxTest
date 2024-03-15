import styled from "@emotion/native";
import StyledTextProps from "src/Types/TextPropTypes";

const StyledText = styled.Text`
  color: ${(props: StyledTextProps) => props.color || "#fff"};
  font-size: ${(props: StyledTextProps) =>
    props.variant === "title" ? "35px" : "20px"};
  font-weight: ${(props: StyledTextProps) => {
    if (props.variant === "title") return "bold";
    return props.weight || "normal";
  }};
  text-align: ${(props: StyledTextProps) => props.align || "left"};
  text-transform: ${(props: StyledTextProps) =>  props.textTransform || "none"};
`;

export default function Text({ variant = "p", children,...props }: StyledTextProps) {
  return <StyledText variant={variant}
    {...props}
  >{children}</StyledText>;
}
