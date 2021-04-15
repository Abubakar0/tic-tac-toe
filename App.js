import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

export default function App() {
  const [turn, setturn] = useState("player1");
  return (
    <View style={styles.container}>
      <View>
        <SafeAreaView style={header.container}>
          <Text>
            <h1>Tic Tac Toe Game</h1>
          </Text>
        </SafeAreaView>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, padding: 20 }}>Player 1 : O</Text>
      </View>
      <View></View>

      <View style={{ flexDirection: "row" }}>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
        <View style={table.container}>
          <Pressable></Pressable>
        </View>
      </View>
      <View>
        <Text></Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, padding: 20 }}>Player 2 : X</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const Header = (props) => {
  return (
    <View>
      <Text style={headerStyles.text}>{props.game_title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const table = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "orange",
    color: "#000000",
    borderColor: "black",
    height: 80,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderWidth: 1,
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
