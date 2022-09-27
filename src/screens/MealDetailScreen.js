import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../store/actions/meals";
const { width, height } = Dimensions.get("window");

const MealDetailScreen = (props) => {
  const { navigation, route } = props;
  const availableMeals = useSelector((state) => state.meals.meals);
  const { mealId, mealTitle } = route.params;
  const selectedMealDetail = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(mealId));
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: mealTitle,
      headerRight: () => (
        <TouchableOpacity onPress={toggleFavoriteHandler}>
          <Ionicons name="ios-star" size={23} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            alert(isFavor);
          }}
        >
          <Image
            style={styles.image}
            source={{ uri: selectedMealDetail.imageUrl }}
          />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{selectedMealDetail.title}</Text>
        <View style={styles.duration}>
          <Text>
            <MaterialCommunityIcons
              name="clock-time-five-outline"
              size={18}
              color={Colors.gray}
            />
          </Text>
          <Text style={styles.time}> {selectedMealDetail.duration}p</Text>
        </View>
        <View style={styles.ingredient}>
          <Text style={styles.ingredientText}>Nguyên liệu</Text>

          <View style={styles.ingredientList}>
            {selectedMealDetail.ingredients.map((ingredient) => (
              <Text key={ingredient} style={styles.ingredientItem}>
                {ingredient}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.steps}>
          <Text style={[styles.stepHeader, styles.ingredientText]}>
            Các bước làm
          </Text>
          <View>
            {selectedMealDetail.steps.map((item, index) => (
              <Text key={item} style={styles.step}>
                {index + 1} {item}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 2,
  },
  content: {
    paddingHorizontal: 15,
  },
  title: {
    marginBottom: 10,
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "700",
  },
  duration: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,

    borderColor: Colors.gray,
  },
  time: {
    color: Colors.gray,
  },
  ingredientList: {
    marginTop: 5,
  },
  ingredientText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "600",
  },
  ingredientItem: {
    paddingBottom: 5,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    borderStyle: "dotted",
  },
  steps: {},
  stepHeader: {},
  step: {},
});
