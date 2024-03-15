import React,{useState, useEffect} from "react";
import { Animated,Easing, View, StyleSheet,Text, TouchableOpacity,Image } from "react-native";
import CoinCounter from "../CoinCounter/CoinCounter";
import Button from "../Button/Button";
export default function Header(){
    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    <View style={styles.navContainer}>
      <Animated.Image 
        source={require('../../assets/planet/PlanetaAritmética.png')}
        style={{width: 50, height: 50, transform: [{rotate: spin}]}}
      />

      <View style={styles.leftHeader}>
        <CoinCounter/>
        <Button
            color="#f88803"
            padding="xxs"
        >
            <Image 
                source={require('../../assets/svgIcons/DropDown/DropDown.png')}
                style={{width: 30, height: 30}}
            />
        </Button>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  leftHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  
});
