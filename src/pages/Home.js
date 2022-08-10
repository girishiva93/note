import React,{useEffect} from "react";
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

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/Config";
import { useIsFocused } from "@react-navigation/native";
import { setNotes } from "../../reducer/notesSlice";
import {useSelector, useDispatch} from "react-redux"

const TodoListing = () => {

  const dispatch = useDispatch()

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { auth } = useSelector((state) => state.notes.value);
  const todoTask = useSelector((state) => state.notes.value.notes);

  const notesCollectionRef = query(
    collection(db, "notes"),
    where("userId", "==", auth.id)
  );

  const getNotes = async () => {
    const notesCol = await getDocs(notesCollectionRef);
    const notesResponse = notesCol.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(setNotes([...notesResponse]));
  };

  useEffect(() => {
    getNotes();
  }, [isFocused]);

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
    height: "100%",
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
