import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayMeals} navigation={navigation} />;
};
//config header title for meal screen

export default CategoryMealScreen;

const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
