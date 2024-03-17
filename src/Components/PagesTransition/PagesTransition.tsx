import { Animated, View, StyleSheet, Easing, Image } from "react-native";
import React, { useEffect, useRef } from "react";

export default function PagesTransition({ children, style }) {
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const logo = useRef(null);
  const transition = new Animated.Value(0);

  const transitionStyleY = {
    transform: [
      {
        scale: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 500],
        }),
      },
    ],
  };

  const transitionStyleY2 = {
    transform: [
      {
        scale: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200],
        }),
      },
    ],
  };

  const transitionStyleY3 = {
    transform: [
      {
        scale: transition.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  useEffect(() => {
    const animation = Animated.timing(transition, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    });

    animation.start(() => {
      circleRef1.current.setNativeProps({
        style: { transform: [{ scale: 0 }] },
      });
      circleRef2.current.setNativeProps({
        style: { transform: [{ scale: 0 }] },
      });
      logo.current.setNativeProps({ style: { transform: [{ scale: 0 }] } });
    });

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      {children}
      <Animated.View
        ref={circleRef1}
        style={[styles.animation, transitionStyleY]}
      />
      <Animated.View
        ref={circleRef2}
        style={[styles.animation2, transitionStyleY2]}
      />
      <Animated.Image
        ref={logo}
        source={require("src/assets/logo/logo_blanco_transicion.png")}
        style={[styles.animation3, transitionStyleY3]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flex: 1,
  },
  animation: {
    position: "absolute",
    width: 5,
    height: 5,
    backgroundColor: "#136DA0",
    zIndex: 1000,
    borderRadius: 100,
    top: "50%",
    left: "50%",
  },
  animation2: {
    position: "absolute",
    width: 5,
    height: 5,
    backgroundColor: "#5AD9F0",
    zIndex: 1000,
    borderRadius: 100,
    top: "50%",
    left: "50%",
  },
  animation3: {
    position: "absolute",
    width: 150,
    height: 100,
    objectFit: "contain",
    zIndex: 1000,
    top: "45%",
    left: "30%",
  },
});
