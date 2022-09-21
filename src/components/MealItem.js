import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import ImageHeader from "./ImageHeader";
const { width, height } = Dimensions.get("window");

const MealItem = (props) => {
  const { title, onSelectMeal, duration, complexity, affordability, image } =
    props;

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <ImageHeader image={image} title={title} />

          <View style={[styles.mealRow, styles.mealDetail]}>
            <Text style={styles.mealDetailText}>{duration} mins</Text>
            <Text style={styles.mealDetailText}>{complexity}</Text>
            <Text style={styles.mealDetailText}>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: height / 3,
    width: "100%",
    paddingBottom: 40,
    paddingTop: 10,
  },
  mealRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  mealDetail: {
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  mealDetailText: {
    fontWeight: "600",
    fontSize: 14,
    textTransform: "uppercase",
  },
});
