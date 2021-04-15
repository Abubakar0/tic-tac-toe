import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  FlatList,
} from "react-native";

export default function App() {
  const CustomButton = ({ text, number, symbol }) => {
    return (
      <Pressable
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          color: "#000000",
          borderColor: "#FF0000",
          height: 80,
          width: 80,
          borderWidth: 2,
          padding: 10,
        }}
        onPress={() => symbol(text, number)}
      >
        <Text>{text}</Text>
      </Pressable>
    );
  };

  const [buttons, setbuttons] = useState([
    { button: "1", text: "" },
    { button: 2, text: "" },
    { button: 3, text: "" },
    { button: 4, text: "" },
    { button: 5, text: "" },
    { button: 6, text: "" },
    { button: 7, text: "" },
    { button: 8, text: "" },
    { button: 9, text: "" },
  ]);
  const [turn, setturn] = useState(true);
  const [getmodel, setmodel] = useState(false);

  const playersymbol = (txt, index) => {
    if (txt == "") {
      let temp = [...buttons];
      if (turn == 1) temp[index - 1].text = "0";
      else temp[index - 1].text = "X";
      setbuttons(temp);
      setturn(!turn);
      check();
    }
  };
  const check = () => {
    let temp = [...buttons];
    if (
      temp[0].text.toString() == "0" &&
      temp[1].text.toString() == "0" &&
      temp[2].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[3].text.toString() == "0" &&
      temp[4].text.toString() == "0" &&
      temp[5].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[6].text.toString() == "0" &&
      temp[7].text.toString() == "0" &&
      temp[8].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[0].text.toString() == "0" &&
      temp[3].text.toString() == "0" &&
      temp[6].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[1].text.toString() == "0" &&
      temp[4].text.toString() == "0" &&
      temp[7].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[2].text.toString() == "0" &&
      temp[5].text.toString() == "0" &&
      temp[8].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[0].text.toString() == "0" &&
      temp[4].text.toString() == "0" &&
      temp[8].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[2].text.toString() == "0" &&
      temp[4].text.toString() == "0" &&
      temp[6].text.toString() == "0"
    ) {
      setmodel(true);
    } else if (
      temp[0].text.toString() == "X" &&
      temp[1].text.toString() == "X" &&
      temp[2].text.toString() == "X"
    ) {
      setmodel(true);
    } else if (
      temp[3].text.toString() == "X" &&
      temp[4].text.toString() == "X" &&
      temp[5].text.toString() == "X"
    ) {
      setmodel(true);
    } else if (
      temp[6].text.toString() == "X" &&
      temp[7].text.toString() == "X" &&
      temp[8].text.toString() == "X"
    ) {
      setmodel(true);
    } else if (
      temp[0].text.toString() == "X" &&
      temp[3].text.toString() == "X" &&
      temp[6].text.toString() == "X"
    ) {
      setmodel(true);
    } else if (
      temp[1].text.toString() == "X" &&
      temp[4].text.toString() == "X" &&
      temp[7].text.toString() == "X"
    ) {
      setmodel(true);
    } else if (
      temp[2].text.toString() == "X" &&
      temp[5].text.toString() == "X" &&
      temp[8].text.toString() == "X"
    ) {
      setmodel(true);
    } else if (
      temp[0].text.toString() == "X" &&
      temp[4].text.toString() == "X" &&
      temp[8].text.toString() == "X"
    ) {
      setmodel(true);
    } else if (
      temp[2].text.toString() == "X" &&
      temp[4].text.toString() == "X" &&
      temp[6].text.toString() == "X"
    ) {
      setmodel(true);
    }
  };
  const playagain = () => {
    Alert.alert("Hi");
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={getmodel}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <View
            style={{
              marginTop: 200,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 20, margin: 5 }}>Congratulation</Text>
            <Text>Player {!turn ? 1 : 2} Wins</Text>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#DC143C",
                padding: 10,
                margin: 10,
              }}
              onPress={playagain.bind()}
            >
              <Text style={{ color: "white" }}>Play Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header game_title="Tic Tac Toe" />

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, padding: 20, color: "red" }}>
          Turn of Player {turn ? 1 : 2}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, padding: 20 }}>Player 1 : O</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 80 }}>
        <FlatList
          numColumns={3}
          data={[...buttons]}
          renderItem={({ item }, index) => (
            <CustomButton
              text={item.text}
              number={item.button}
              symbol={playersymbol}
            />
          )}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, padding: 20 }}>Player 2 : X</Text>
        <StatusBar style="auto" />
      </View>
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

const headerStyles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 20,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
