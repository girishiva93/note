import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Navbar from "./Navbar";

const AddNotes = () => {
  return (
    <View style={homeStyles.container}>
      <Navbar createNote = {"createNote"} />
      <View>
        <TextInput
          multiline
          style={{ fontSize: 30, color: "white", marginLeft: 20 }}
          placeholder="Title"
          placeholderTextColor="#9A9A9A"
        />
      </View>
      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <TextInput
          multiline
          style={{ fontSize: 20, color: "white" }}
          placeholder="Type something..."
          placeholderTextColor="#9A9A9A"
        />
      </View>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

export default AddNotes;
