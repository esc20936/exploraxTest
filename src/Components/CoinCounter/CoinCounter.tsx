import { View,Image,StyleSheet,Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
export default function CoinCounter(){
    const coins = useSelector((state:RootState) => state.coinCounter.value);
    
    return (
        <View style={styles.coinContainer}>
            <Image 
                source={require('../../assets/Coin/moneda.png')}
                style={styles.coinImage}
            />
            <View
                style={styles.coinCount}
            >
                <Text
                    style={styles.coinText}
                >
                    {coins.toString().padStart(4, '0')}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    coinContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        padding:2,
        overflow: 'hidden',
    },
    coinImage: {
        position: 'absolute',
        width: 35,
        height: 35,
        zIndex: 1,
    },
    coinCount: {
        width: 100,
        height: 30,
        backgroundColor:"#072155",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight:10,
    },
    coinText: {
        color: "#fff",
        fontSize: 20,
    }
    
  });