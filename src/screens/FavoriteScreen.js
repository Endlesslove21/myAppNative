import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoriteScreen = ({ navigation, route }) => {
  const { mealId } = route.params;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(mealId) >= 0
  );

  return <MealList listData={displayMeals} navigation={navigation} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
