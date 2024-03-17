import { View, Image, StyleSheet, ImageBackground } from "react-native";
import Text from "../Text/Text";

interface StarStatProps {
  amount: number;
  description: string;
  starColor: "green" | "yellow" | "red";
}

export default function StarStat({
  amount,
  description,
  starColor,
}: StarStatProps) {


    let starImages = {
        "green": require("src/assets/stars/estrella_correctas.png"),
        "yellow": require("src/assets/stars/estrella_preguntas.png"),
        "red": require("src/assets/stars/estrella_incorrectas.png"),
    }

    let starImage = starImages[starColor];

  return (
    <View style={styles.container}>
        <Image source={starImage} style={styles.star} />

      <ImageBackground source={require("src/assets/backgroundConteoPreguntas/background_conteo_preguntas.png")}
      style={styles.starStatContainer}
      >
        <Text color="#133362" size="25px" weight="bold">
          {amount}
        </Text>
        <Text color="#133362" size="10px">
          {description}
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  starStatContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
  },
  container:{
    position: "relative",
  },
  star:{
    position: "absolute",
    width: 50,
    height: 50,
    zIndex: 1,
    objectFit: "contain",
    top: -28,
    left:"20%"
  }
});
