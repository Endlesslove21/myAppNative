import {
  StyleSheet,
  Text,
  View,
  Switch,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import Colors from "../constants/Colors";
const { width, height } = Dimensions.get("window");
const SwitchTemplate = ({ name, value, onValueChange }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchName}>{name}</Text>

      <Switch
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        trackColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        style={styles.switchBtn}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [isGlutent, setIsGlutent] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactose, setIsLactose] = useState(false);

  const toggleIsGlutentSwitch = () => {
    setIsGlutent((pre) => {
      return !pre;
    });
  };
  const toggleIsVeganSwitch = () => {
    setIsVegan((pre) => {
      return !pre;
    });
  };
  const toggleIsVegetarian = () => {
    setIsVegetarian((pre) => {
      return !pre;
    });
  };
  const toggleIsLactose = () => {
    setIsLactose((pre) => {
      return !pre;
    });
  };

  const selectedFilter = useCallback(() => {
    const optionFilter = {
      glutent: isGlutent,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactose: isLactose,
    };
  }, [isGlutent, isVegan, isLactose, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ saveFilter: selectedFilter });
  }, [selectedFilter]);

  return (
    <View>
      <Text style={styles.headerText}>Filter Meals</Text>
      <SwitchTemplate
        name="Glutent"
        value={isGlutent}
        onValueChange={toggleIsGlutentSwitch}
      />
      <SwitchTemplate
        name="Vegan"
        value={isVegan}
        onValueChange={toggleIsVeganSwitch}
      />
      <SwitchTemplate
        name="Vegetarian"
        value={isVegetarian}
        onValueChange={toggleIsVegetarian}
      />
      <SwitchTemplate
        name="Lactose"
        value={isLactose}
        onValueChange={toggleIsLactose}
      />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  switchContainer: {
    paddingHorizontal: width / 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  switchName: {
    fontSize: 16,
    lineHeight: 43,
  },
  switchBtn: {
    lineHeight: 20,
  },
});
