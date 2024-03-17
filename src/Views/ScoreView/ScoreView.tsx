import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import Text from "src/Components/Text/Text";
import Button from "src/Components/Button/Button";
import ProgressBar from "src/Components/ProgessBar/ProgressBar";
import StarStat from "src/Components/StarStat/StarStat";
import CoinStat from "src/Components/CoinStat/CoinStat";



export default function ScoreView({ route, navigation }) {


  const coinRefs = Array.from({ length: 5 }, () => useRef(null));
  const transitions = Array.from({ length: 5 }, () => new Animated.Value(0));
  const { amountQuestions, correctAnswers, incorrectAnswers } = route.params;

  const amountCoins = correctAnswers * 20;


  const transitionStyles: any = transitions.map((transition) => ({
    transform: [
      {
        translateX: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 120],
        }),
      },
      {
        translateY: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -380],
        }),
      },
      {
        scale: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.5],
        }),
      },
      { perspective: 1000 },
    ],
  }));

  useEffect(() => {

    

    const animations = transitions.map((transition, index) =>
      Animated.timing(transition, {
        toValue: 1,
        duration: 500,
        delay: 1000 + index * 50,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    );

    const animation = Animated.parallel(animations);

    animation.start(() => {
      coinRefs.forEach((ref) =>
        ref.current.setNativeProps({ style: { display: "none" } })
      );
      
     

    });

    return () => {
      // animation.stop();
    };
  }, []);

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
          <StarStat
            amount={amountQuestions}
            description="Preguntas"
            starColor="yellow"
          />
          <StarStat
            amount={correctAnswers}
            description="Correctas"
            starColor="green"
          />
          <StarStat
            amount={incorrectAnswers}
            description="Incorrectas"
            starColor="red"
          />
        </View>
        <View>
          <CoinStat amount={amountCoins} />
          {coinRefs.map((ref, index) => (
            <Animated.Image
              key={index}
              ref={ref}
              source={require("src/assets/Coin/moneda.png")}
              style={[styles.coinAnimation, transitionStyles[index]]}
            />
          ))}
        </View>
        <View style={styles.bottomButtonContainer}>
          <Button onPress={handleFinish} color="#fff" padding="4px 10px">
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
  statsContainer: {
    height: "30%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  coinAnimation: {
    width: 50,
    height: 50,
    position: "absolute",
    left: "-5%",
  },
});
