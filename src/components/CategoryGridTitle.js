import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTitle = (props) => {
  const { title, onSelect, backgroundColor } = props;
  return (
    <TouchableOpacity onPress={onSelect} style={styles.gridItem}>
      <View style={[styles.itemBox, { backgroundColor: backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 120,
  },
  itemBox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    padding: 7,
    fontWeight: "600",
    fontSize: 16,
  },
});
