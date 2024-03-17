import React from "react";
import styled from "@emotion/native";
import StyledButtonProps from "src/Types/ButtonPropTypes";
import { View, StyleSheet } from "react-native";
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
      case "xl":
        return "5px 60px";
      default:
        return props.padding || "15px 20px";
    }
  }};
  border-radius: ${(props: StyledButtonProps) => props.borderRadius || "5px"};
  align-items: center;
  background-color: ${(props: StyledButtonProps) => props.color || "#072155"};
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-width: 3px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const ShineEffect = styled.View`
  position: absolute;
  height: 120%;
  width: 100%;
  background-color: ${(props: StyledButtonProps) => props.color || "#072155"};
  z-index: 1;
  opacity: 0.5;
`;

export default function Button({ children, ...props }: StyledButtonProps) {
  return (
    <Container {...props} >
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
   borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 5,
    borderStyle: "solid",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});