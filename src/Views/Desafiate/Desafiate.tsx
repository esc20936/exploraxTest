import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import Text from "src/Components/Text/Text";
import Button from "src/Components/Button/Button";
import LottieView from "lottie-react-native";


export default function Desafiate({navigation}) {
  const animation = useRef(null);


  const handleAceptoElRetoButtonPress = () => {
    navigation.navigate("Preguntas");
  };

  return (
    <View style={styles.container}>
      <Text variant="title">¡Desafíate!</Text>
      <LottieView
        autoPlay
        ref={animation}
        style={styles.animationContainer}
        source={require("src/assets/JSONAnimations/DIntro/DconFuego.json")}
      />

      <View style={styles.blueContainer}/>
      <View style={styles.blueContainerFront}>
        <View style={styles.titleContainer}>
          <Text variant="title">¡Desafíate!</Text>
          <Image
            source={require("src/assets/TitleLine/titleLine.png")}
            style={{ width: "100%", height: 1 }}
          />
        </View>
        <Text align="center">
          Supera estos desafíos y empieza a completar las misiones del
        </Text>
        <Text weight="bold">planeta Aritmética</Text>
        <Button
        onPress={handleAceptoElRetoButtonPress}
        color="#fff" padding="4px 10px">
          <Text color="#000" textTransform="uppercase">
            ¡Acepto el reto!
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  blueContainer: {
    position: "absolute",
    width: "80%",
    maxWidth: 300,
    height: "40%",
    minHeight: 200,
    maxHeight: 300,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#204D8D",
    borderBottomWidth: 8,
    borderBottomColor: "#123051",
    zIndex: 4,

  },
  blueContainerFront: {
    position: "absolute",
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
    zIndex: 8,
  },
  titleContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  animationContainer: {
    position: "absolute",
    top: "5%",
    left: "-15%",
    width: "100%",
    height: "100%",
    zIndex: 6,
  },

});
