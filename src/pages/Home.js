import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import Todo from "../components/Todo";

import { useSelector } from "react-redux";

const TodoListing = () => {
  const navigation = useNavigation();
  const todoTask = useSelector((state) => state.notes.value.notes);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={homeStyles.container}>
          <Navbar />
            {todoTask.length > 0 ? (
              <Todo todoTask={todoTask} />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "50%",
                  marginBottom: "80%",

                  height: "100%",
                }}
              >
                <Image source={require("../../assets/icon/addTask.png")} />
                <Text style={{ color: "white" }}>Create Your First Note !</Text>
              </View>
            )}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={homeStyles.addTask}
        onPress={() => navigation.navigate("Todo")}
      >
        <Image source={require("../../assets/icon/plusIcon.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#252525",
    borderRadius: 5,
    height:'100%',
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },

  addTask: {
    fontSize: 20,
    padding: 20,
    borderRadius: 40,
    marginVertical: 10,
    color: "white",
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    right: 10,
  },
});

export default TodoListing;
