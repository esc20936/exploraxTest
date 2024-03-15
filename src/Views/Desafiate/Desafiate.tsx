import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import Text from "src/Components/Text/Text";
import Button from "src/Components/Button/Button";
import LottieView from "lottie-react-native";
import Footer from "src/Components/Footer/Footer";
export default function Desafiate() {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.animationContainer}
        source={require("src/assets/JSONAnimations/DIntro/DconFuego.json")}
      />
      <View style={styles.blueContainer}>
        
      </View>

      <View style={styles.blueContainerFront}>
        <View style={styles.titleContainer}>
          <Text variant="title">¡Desafíate!</Text>
          <Image
            source={require("../../assets/TitleLine/titleLine.png")}
            style={{ width: "100%", height: 1 }}
          />
        </View>
        <Text align="center">
          Supera estos desafíos y empieza a completar las misiones del
        </Text>
        <Text weight="bold">planeta Aritmética</Text>
        <Button color="#fff" padding="4px 10px">
          <Text color="#000" textTransform="uppercase">
            ¡Acepto el reto!
          </Text>
        </Button>
        </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:0
  },

  blueContainer: {
    position: "absolute",
    width: "80%",
    maxWidth: 300,
    height: "40%",
    minHeight: 200,
    maxHeight: 300,
    backgroundColor: "#204D8D",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    gap: 20,
    zIndex: -1,
  },
  blueContainerFront: {
    width: "80%",
    maxWidth: 300,
    height: "40%",
    minHeight: 200,
    maxHeight: 300,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    gap: 20,
    zIndex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  titleContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  animationContainer: {
    position: "absolute",
    top: "5%",
    left: "-10%",
    width: "100%",
    height: "100%",
  },
});
