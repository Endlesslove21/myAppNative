import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = ({ navigation }) => {
  const renderListItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        onSelect={() => {
          navigation.navigate("Category Meals", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
        backgroundColor={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      renderItem={renderListItem}
      data={CATEGORIES}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  centerview: {
    justifyContent: "center",
    alignItems: "center",
  },
});
