import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import Text from "src/Components/Text/Text";
import Button from "src/Components/Button/Button";
import LottieView from "lottie-react-native";
import ProgressBar from "src/Components/ProgessBar/ProgressBar";
import StarStat from "src/Components/StarStat/StarStat";
import CoinStat from "src/Components/CoinStat/CoinStat";
export default function ScoreView({ navigation }) {
  const animation = useRef(null);


  const handleFinish = () => {
    navigation.navigate("Inicio");
  };
  return (
    <View style={styles.container}>
      <ProgressBar index={10} limit={10} />

      <View style={styles.blueContainer}>
        <View style={styles.titleContainer}>
          <Text variant="title">¡Buen trabajo!</Text>
        </View>

        <View style={styles.statsContainer}>
          <StarStat amount={5} description="Preguntas" starColor="yellow" />
          <StarStat amount={5} description="Correctas" starColor="green" />
          <StarStat amount={5} description="Incorrectas" starColor="red" />
        </View>

        <View style={styles.coinsContainer}>
            <CoinStat amount={100} />
        </View>
      <View style={styles.bottomButtonContainer}>
        
        <Button
          onPress={handleFinish}
          color="#fff"
          padding="4px 10px"
        >
          <Text color="#000" textTransform="uppercase">
            HOME
          </Text>
        </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
  },
  bottomButtonContainer: {},
  blueContainer: {
    flex: 0.75,
    width: "100%",
    backgroundColor: "#204D8D",
    marginTop: 40,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 25,
    borderBottomWidth: 8,
    borderBottomColor: "#123051",
  },

  titleContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  animationContainer: {
    position: "absolute",
    top: "5%",
    left: "-15%",
    width: "100%",
    height: "100%",
  },
  statsContainer: {
    height: "30%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  coinsContainer: {},
});
