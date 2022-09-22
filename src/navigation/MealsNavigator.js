import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
};

const menuHeaderButton = ({ navigation, route }) => ({
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginRight: 5 }}
      onPress={() => {
        navigation.toggleDrawer();
      }}
    >
      <Ionicons name="ios-menu" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});

const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={menuHeaderButton}
      />

      <Stack.Screen
        name="Category Meals"
        component={CategoryMealScreen}
        options={({ route }) => ({ title: route.params.categoryTitle })}
      />

      <Stack.Screen
        name="Meal Details"
        component={MealDetailScreen}
        options={({ navigation, route }) => ({
          headerTitle: "Meal Details",
        })}
      />
    </Stack.Navigator>
  );
};

const FavorNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={menuHeaderButton}
      />
    </Stack.Navigator>
  );
};

const FilterNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginRight: 5 }}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Ionicons name="menu" size={24} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={route.params.saveFilter}>
              <Ionicons name="ios-save" size={22} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Meals") {
            iconName = "restaurant";
          } else if (route.name === "Favorites") {
            iconName = "ios-star";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      })}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        listeners={({ navigation, route }) => ({
          tabPress: () => navigation.navigate(route.name),
        })}
      />
      <Tab.Screen name="Favorites" component={FavorNavigator} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Category" component={BottomTabNavigator} />
        <Drawer.Screen name="FilterScreen" component={FilterNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
