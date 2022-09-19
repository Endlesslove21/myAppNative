import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const ImageHeader = ({ image, title }) => {
  return (
    <View style={[styles.mealRow, styles.mealHeader]}>
      <ImageBackground source={{ uri: image }} style={styles.bgImage}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageHeader;

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  mealHeader: {
    height: "90%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});
