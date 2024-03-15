import { Image, View, StyleSheet } from "react-native";
import React from "react";

export default function Chanin() {
  return (
    <>
      <Image
        source={require("src/assets/chanin/chanin.png")}
        style={{
          position: "absolute",
          width: 110,
          height: 300,
          bottom: "-10%",
          left: 0,
        }}
      />
    </>
  );
}
