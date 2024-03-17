import React, { useState, useEffect } from "react";
import Layout from "src/Views/Layout/Layout";
import DesafiatePage from "src/Views/Desafiate/Page";
import QuestionsPage from "src/Views/Questions/Page";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScoreViewPage from "src/Views/ScoreView/Page";
import { Provider } from "react-redux";
import { store } from "src/store/store";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Inicio" component={DesafiatePage} />
        <Stack.Screen name="Preguntas" component={QuestionsPage} />
        <Stack.Screen name="Score" component={ScoreViewPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
