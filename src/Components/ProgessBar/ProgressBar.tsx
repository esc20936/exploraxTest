import { View, StyleSheet } from 'react-native';
import Text from 'src/Components/Text/Text';

interface ProgressBarProps {
  index: number;
  limit: number;
}

export default function ProgressBar({ index, limit }: ProgressBarProps) {

   let progress = (index / limit) * 100;

    return (
        <View style={styles.progressContainer}>
        <Text size="15px" variant="p">
          Nivel {index}/{limit}
        </Text>
        <View
          style={{
            width: "100%",
            height: 14,
            backgroundColor: "#fff",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#f88803",
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    progressContainer: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 5,
    },

});