import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = (props) => {
  const { listData, navigation } = props;

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        onSelectMeal={() => {
          navigation.navigate("Meal Details", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
          });
        }}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({});
