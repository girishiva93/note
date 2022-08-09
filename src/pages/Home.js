import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Todo from "../components/Todo";
import { todoTask } from "../../data";

import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";

const TodoListing = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={homeStyles.container}>
        <Navbar />
          {todoTask ? (
            <Todo todoTask={todoTask} />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30%",
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
    flex: 1,
    backgroundColor: "black",
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
