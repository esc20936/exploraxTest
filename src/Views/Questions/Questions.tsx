import React, { useRef, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Text from "src/Components/Text/Text";
import ProgressBar from "src/Components/ProgessBar/ProgressBar";
import Button from "src/Components/Button/Button";
import QuestionsManager from "src/Components/QuestionsManager/QuestionsManager";
import MathQuestionFactory from "src/Utils/MathQuestionFactory";

export default function Questions({ navigation }) {
  const animation = useRef(null);
  let factory = new MathQuestionFactory();
  const [activeIndexQuestion, setActiveIndexQuestion] = useState(0);

  let questions = factory.generate10RandomQuestions();

  const handleAceptoElRetoButtonPress = () => {
    navigation.navigate("Inicio");
  };

  const handleNextQuestion = () => {
    if (activeIndexQuestion < 9) {
      setActiveIndexQuestion(activeIndexQuestion + 1);
      console.log(activeIndexQuestion);
    } else if (activeIndexQuestion === 9) {
      // last question
      console.log("last question");
      console.log("Finish");
      navigation.navigate("Score");
    } else {
      console.log("Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text variant="title">Desafíate</Text>
        <Image
          source={require("src/assets/TitleLine/titleLine.png")}
          style={{ width: "100%", height: 1 }}
        />
      </View>
      <ProgressBar index={activeIndexQuestion + 1} limit={10} />

      <QuestionsManager
        handleNextQuestion={handleNextQuestion}
        question={questions[activeIndexQuestion].question}
        options={questions[activeIndexQuestion].options}
        answerIndex={questions[activeIndexQuestion].answerIndex}
        questionType={questions[activeIndexQuestion].questionType}
      />

      <View style={styles.bottomButtonContainer}>
        <Button
          onPress={handleAceptoElRetoButtonPress}
          color="#fff"
          padding="4px 10px"
        >
          <Text color="#000" textTransform="uppercase">
            HOME
          </Text>
        </Button>
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
  blueContainerFront: {
    width: "80%",
    maxWidth: 300,
    height: "40%",
    minHeight: 200,
    maxHeight: 300,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    gap: 20,
    zIndex: 1,
  },
  titleContainer: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  animationContainer: {
    position: "absolute",
    top: "5%",
    left: "-10%",
    width: "100%",
    height: "100%",
  },
});
