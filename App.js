///// CreatedBy : Abhishek kumar choudhary
"use strict";

import React, { Component } from "react";
import ReactNative from "react-native";
import SubView from "./components/SubView";
import Header from "./components/Header";

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  Image,
  Dimensions,
  ScrollView
} = ReactNative;

var isHidden = true;
export const windowHeight = Dimensions.get("window").height;
export const windowWidth = Dimensions.get("window").width;
const subHeight = windowHeight * 0.5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(subHeight), //This is the initial position of the subview
      buttonText: "Show Subview",
      subViewHeight: subHeight
    };
  }

  _toggleSubview() {
    this.setState({
      buttonText: !isHidden ? "Show Subview" : "Hide Subview"
    });

    var toValue = subHeight;

    if (isHidden) {
      toValue = 0;
    }

    Animated.spring(this.state.bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8
    }).start();

    isHidden = !isHidden;
  }
  //<Text style={styles.buttonText}>{this.state.buttonText}</Text>
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={{ paddingTop: 10 }}>
          <TouchableHighlight
            onPress={() => {
              this._toggleSubview();
            }}
          >
            <Image
              style={styles.backgroundImage}
              source={require("./images/car-img1.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this._toggleSubview();
            }}
          >
            <Image
              style={styles.backgroundImage}
              source={require("./images/car-img2.jpg")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this._toggleSubview();
            }}
          >
            <Image
              style={styles.backgroundImage}
              source={require("./images/car-img3.jpg")}
            />
          </TouchableHighlight>
        </ScrollView>
        <TouchableHighlight
          onPress={() => {
            this._toggleSubview();
          }}
        >
          <Image
            style={styles.circularImage}
            source={require("./images/45-512.png")}
          />
        </TouchableHighlight>
        <SubView bounceValue={this.state.bounceValue} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 66
  },
  circularImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 50,
    backgroundColor: "#F5FCFF",
    right: windowWidth / 2 - 30
  },
  backgroundImage: {
    flex: 1,
    marginBottom: 10,
    height: windowHeight / 2.5,
    width: windowWidth,
    marginBottom: 5
  }
});

AppRegistry.registerComponent("App", () => App);
