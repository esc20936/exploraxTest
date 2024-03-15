import { View,Image,StyleSheet,Text } from "react-native";
export default function CoinCounter(){
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
                >0000</Text>
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