import React from "react";
import styled from "@emotion/native";
import StyledButtonProps from "src/Types/ButtonPropTypes";

const Container = styled.TouchableOpacity`
  position: relative;
  padding: ${(props: StyledButtonProps) => {
    switch (props.padding) {
      case "xxs":
        return "2px 5px";
      case "xs":
        return "10px 15px";
      case "sm":
        return "15px 20px";
      case "md":
        return "20px 25px";
      case "lg":
        return "25px 30px";
      default:
        return props.padding || "15px 20px";
    }
  }};
  border-radius: ${(props: StyledButtonProps) => props.borderRadius || "5px"};
  align-items: center;
  background-color: ${(props: StyledButtonProps) => props.color || "#072155"};
`;

export default function Button({ children, ...props }: StyledButtonProps) {
  return (
    <Container {...props}>
      {children}
      {/* <ShineEffect /> */}
    </Container>
  );
}
