import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, ImageBackground,Platform } from "react-native";
import Header from "src/Components/Header/Header";
import Desafiate from "src/Views/Desafiate/Desafiate";
import Footer from "src/Components/Footer/Footer";
import LayoutPropTypes from "src/Types/Views/LayoutPropTypes";

export default function Layout({ children }: LayoutPropTypes) {
  return (
    <View style={styles.containerFull}>
      <ImageBackground
        source={require("src/assets/background/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png")}
        style={styles.containerFull}
      >
        <SafeAreaView style={styles.container}>
          <Header />
            {children}
          <Footer />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    padding: 0,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  containerFull: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    objectFit: "fill",
  },
});
