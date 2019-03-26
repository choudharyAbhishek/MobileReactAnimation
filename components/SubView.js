//import liraries
import React, { Component } from "react";
import { Dimensions, Text, StyleSheet, Animated } from "react-native";
import DetailsTab from "./DetailsTab"

// create a component
class SubView extends Component {
  render() {
    return (
      <Animated.View
        style={[
          styles.subView,
          { transform: [{ translateY: this.props.bounceValue }] }
        ]}
      >
        <DetailsTab />
      </Animated.View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height * 0.5
  }
});

//make this component available to the app
export default SubView;
