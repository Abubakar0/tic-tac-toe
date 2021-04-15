import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
} from "react-native";
import { render } from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamestate: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentplayer: 1,
    };
  }
  componentDidMount() {
    this.initialize();
  }
  initialize = () => {
    this.setState({
      gamestate: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    });
  };

  ontilepress = (row, col) => {
    var value = this.state.gamestate[row][col];
    if (value !== 0) {
      return;
    }

    var player = this.state.currentplayer;
    var arr = this.state.gamestate.slice();
    arr[row][col] = player;
    this.setState({ gamestate: arr });

    //switch
    var nextp = player == 1 ? -1 : 1;
    this.setState({ currentplayer: nextp });
  };

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
          <SafeAreaView>
            <Text>
              <h1>Tic Tac Toe Game</h1>
            </Text>
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
    justifyContent: "top",
  },
});
