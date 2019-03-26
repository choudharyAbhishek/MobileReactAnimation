//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
// create a component
class Header extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", backgroundColor: "#F5FCFF"}}>
        <View style={{ flexDirection: "row", flex:1, justifyContent: "flex-start" }}>
          <Ionicons
            name="md-arrow-back"
            size={32}
            color="grey"
            style={styles.icons}
          />
        </View>
        <View style={{ flexDirection: "row", flex:1, justifyContent: "flex-end", marginRight: 10 }}>
          <Ionicons
            name="ios-notifications"
            size={32}
            color="grey"
            style={styles.icons}
          />
          <Ionicons
            name="ios-search"
            size={32}
            color="grey"
            style={styles.icons}
          />
          <Ionicons
            name="ios-folder"
            size={32}
            color="grey"
            style={styles.icons}
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  icons: {
    marginLeft: 10
  }
});

//make this component available to the app
export default Header;
