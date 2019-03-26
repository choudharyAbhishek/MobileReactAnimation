//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ImageLoader = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.circularImage}
        source={require("./images/car-img1.jpg")}
      />
      <Image
        style={styles.circularImage}
        source={require("./images/car-img1.jpg")}
      />
      <Image
        style={styles.circularImage}
        source={require("./images/car-img1.jpg")}
      />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default ImageLoader;
