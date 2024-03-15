import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, ImageBackground } from "react-native";
import Header from "./src/Components/Header/Header";
import Desafiate from "src/Views/Desafiate/Desafiate";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./src/assets/background/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png")}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <Header />
          <Desafiate />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    padding: 0,
  },
});
