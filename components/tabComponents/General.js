//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const info = {
  Name: "xyz",
  StockNo: "1234",
  Vin: "abc",
  State: "new",
  Age: "12",
  baseRetailPrice: "123456"
};
const TextTile = ({ data }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textTile}>{data}</Text>
    </View>
  );
};
// create a component
class General extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingBottom: 60 }}>
          <ScrollView>
            <TextTile data={info.Name} />
            <TextTile data={info.StockNo} />
            <TextTile data={info.Vin} />
            <TextTile data={info.State} />
            <TextTile data={info.Age} />
            <TextTile data={info.baseRetailPrice} />
          </ScrollView>
        </View>
        <TouchableHighlight style={styles.generalButton}>
          
            <Text
              style={{ color: "#F5FCFF", textAlign: "center", paddingTop: 10 }}
            >
              Create RO
            </Text>
          
        </TouchableHighlight>
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
  generalButton: {
    width: windowWidth,
    height: 60,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#2EC4B6"
  },
  textTile: {
    textAlign: "left",
    color: "#F5FCFF",
    paddingTop: 10,
    fontSize: 20
  },
  textContainer: {
    height: 70,
    width: windowWidth,
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 10
  }
});

//make this component available to the app
export default General;
