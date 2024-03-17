import { View, Image, StyleSheet, ImageBackground } from "react-native";
import Text from "../Text/Text";

interface StarStatProps {
  amount: number;
}

export default function CoinStat({
  amount,

}: StarStatProps) {


  return (
    <View style={styles.container}>
        <Image source={require("@assets/Coin/MonedaF.png")} style={styles.coin} />

      <ImageBackground source={require("src/assets/backgroundConteoMonedas/background_conteomonedas.png")}
      style={styles.coinContainerBackground}
      >
        <Text color="#133362" size="25px" weight="bold">
          {amount}
        </Text>
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    coinContainerBackground: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 80,
  },
  container:{
    position: "relative",
  },
  coin:{
    position: "absolute",
    width: 80,
    height: 80,
    zIndex: 1,
    objectFit: "contain",
    top: "0%",
    left:-45
  }
});
