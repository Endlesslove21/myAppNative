import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsNavigator from "./src/navigation/MealsNavigator";
import store from "./store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
