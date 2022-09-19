import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealList from "../components/MealList";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <MealList image />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
