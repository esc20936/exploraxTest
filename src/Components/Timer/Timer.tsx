import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import LottieView from "lottie-react-native";

export default function Timer() {
  const timerRef = useRef(null);

  const [time, setTime] = useState(20);
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handleEndTimer = () => {
    console.log("Timer ended");
    timerRef.current.reset();
    timerRef.current.pause();
    setIsActive(false);

  };

  const handleResetTimer = () => {
    setTime(20);
    setIsActive(true);
    setIsPaused(false);
  };

  useEffect(() => {
    let interval: any;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            handleEndTimer();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  return (
    <View style={[styles.container]}>
      <LottieView
        ref={timerRef}
        style={styles.animationContainer}
        source={require("src/assets/JSONAnimations/TimerAmarillo/timer_amarillo.json")}
        autoPlay={true}
        loop={true}
      />
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "80%",
  },
  time: {
    top: 3,
    left: 1,
    fontSize: 20,
    alignSelf: "center",
    color: "#4e1cb7",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  animationContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
