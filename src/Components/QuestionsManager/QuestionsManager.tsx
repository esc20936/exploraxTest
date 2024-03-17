import { View, StyleSheet, Image } from "react-native";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { useState } from "react";

interface QuestionsManagerProps {
  handleNextQuestion: () => void;
  handleCorrectAnswer?: () => void;
  question: string;
  options: string[];
  answerIndex: number;
  questionType: "classic" | "custom" | "text";
}

export default function QuestionsManager({
  handleNextQuestion,
  handleCorrectAnswer,
  question,
  options,
  answerIndex,
  questionType,
}: QuestionsManagerProps) {

  const [selectedOption, setSelectedOption] = useState(-1);
  const [showNextButton, setShowNextButton] = useState(false);

  const generateQuestionImage = () => {
    if (questionType === "classic") {
      return (
        <Image
          source={require("src/assets/QuestionMark/QuestionMark.png")}
          style={{ width: 52, height: 52, objectFit: "contain" }}
        />
      );
    }
    return <></>;
  };

  const generateQuestionText = () => {
    let questionLength = question.length;
    if (questionType === "text") {
      return (
        <Text
          color="#133362"
          size={
            questionLength < 20
              ? "20px"
              : questionLength < 40
              ? "15px"
              : questionLength < 60
              ? "14px"
              : questionLength < 200
              ? "12px"
              : "10px"
          }
          weight="bold"
          align="center"
        >
          {question}
        </Text>
      );
    }

    if (
      questionType === "custom" ||
      (questionType === "classic" && questionLength > 20)
    ) {
      return (
        <Text color="#133362" size="20px" weight="bold">
          {question}
        </Text>
      );
    }
    return (
      <Text color="#133362" size="30px" weight="bold">
        {question}
      </Text>
    );
  };

  const handleNextQuestionButton = () => {
    setSelectedOption(-1);
    setShowNextButton(false);
    handleNextQuestion();
  };

  const handleOptionPress = (index: number) => {
    if (index === answerIndex) {
      // console.log("Correcto");
      setShowNextButton(true);
      setSelectedOption(index);
      handleCorrectAnswer();
      // handleNextQuestion();
    } else {
      // console.log("Incorrecto");
      setShowNextButton(true);
      setSelectedOption(index);
   

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        {generateQuestionText()}
        {generateQuestionImage()}
      </View>
      <View style={styles.options}>
        {options.map((option, index) => (
          <Button
            onPress={() => handleOptionPress(index)}
            key={index}
            color={
              selectedOption === index
                ? index === answerIndex
                  ? "#6FBA3B"
                  : "#E6333C"
                : "#6AB1B5"
            }
            style={{
              width: 150,
              height: 50,
              borderRadius: 10,
              padding: 10,
            }}

            disabled={showNextButton}
          >
            <Text
              color="#fff"
              textTransform="uppercase"
              size={
                option.length < 20
                  ? "15px"
                  : option.length < 40
                  ? "8px"
                  : option.length < 60
                  ? "10px"
                  : option.length < 200
                  ? "8px"
                  : "6px"
              }
              weight="bold"
            >
              {option}
            </Text>
          </Button>
        ))}
      </View>
      <View style={styles.bottomButtonContainer}>
        {showNextButton && (
          <Button
            onPress={handleNextQuestionButton}
            color="#fff"
            padding="4px 10px"
          >
            <Text color="#000" textTransform="uppercase">
              Siguiente
            </Text>
          </Button>
        )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
    width: "100%",
    padding: 12,
    gap: 20,
    // backgroundColor: "#fff",
  },
  question: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#8D8D8D",
    padding: 2,
    borderBottomWidth: 5,
    borderBottomColor: "#8D8D8D",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderStyle: "solid",
  },
  options: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  bottomButtonContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
});

