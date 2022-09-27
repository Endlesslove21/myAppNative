import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
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
