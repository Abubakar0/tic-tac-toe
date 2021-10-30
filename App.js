import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default class App extends React.Component {
  renderIcon = (row, col) => {
    var value = this.state.gamestate[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tilex} />;
      case -1:
        return <Icon name="circle-outline" style={styles.tileo} />;
      default:
        return <View />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <SafeAreaView style={{ paddingBottom: 30 }}>
            <Text style={{ fontSize: 40 }}>Tic Tac Toe game</Text>
            <Text style={{ fontSize: 20 }}>Player 1=X</Text>
            <Text style={{ fontSize: 20 }}>Player 2=O</Text>
          </SafeAreaView>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.ontilepress(0, 0)}
            style={table.container}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            style={table.container}
            onPress={() => this.ontilepress(0, 1)}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.ontilepress(0, 2)}
            style={table.container}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.ontilepress(1, 0)}
            style={table.container}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.ontilepress(1, 1)}
            style={table.container}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.ontilepress(1, 2)}
            style={table.container}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.ontilepress(2, 0)}
            style={table.container}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.ontilepress(2, 1)}
            style={table.container}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.ontilepress(2, 2)}
            style={table.container}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 30 }} />
        <Button title="New Game" onPress={this.initialize}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tilex: {
    color: "black",
    fontSize: 60,
  },
  tileo: {
    color: "black",
    fontSize: 60,
  },
});
const table = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "orange",
    color: "#000000",
    borderColor: "black",
    height: 80,
    borderBottomWidth: 1,
    borderWidth: 2,
    padding: 10,
    width: 100,
  },
});
const header = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
