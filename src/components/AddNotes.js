import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../../config/Config";


import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../../reducer/notesSlice";


const AddNotes = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.notes.value);

  const navigation = useNavigation();

  const [saveChangesVisible, setSaveChangesVisible] = useState(false);
  const [discardChangesVisible, setDiscardChangesVisible] = useState(false);

  const [createNote, setCreateNote] = useState({
    title: "",
    description: "",
  });

    const notesCollectionRef = collection(db, "notes");

  const addNoteHandler = (note, val) => {
    setCreateNote((prevState) => ({
      ...prevState,
      [note]: val,
    }));
  };
  const onDiscardHandler = () => {
    setDiscardChangesVisible(false);
    navigation.navigate("Home");
  };

  const onNoteSaveHandler = async() => {
    setSaveChangesVisible(false);
    await addDoc(notesCollectionRef, {
      title: createNote.title,
      description: createNote.description,
      userId: auth.id,
    });
    navigation.navigate("Home");
  };

  const onCloseSave = () => {
    setSaveChangesVisible(false);
    setDiscardChangesVisible(true);
  };

  return (
    <View
      style={
        saveChangesVisible || discardChangesVisible
          ? styles.container__Opacity
          : styles.container
      }
    >
      <View style={styles.topNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.utils__searchIcon}
        >
          <Image source={require("../../assets/icon/backIcon.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSaveChangesVisible(true)}
          style={styles.utils__infoIcon}
        >
          <Image source={require("../../assets/icon/saveIcon.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          multiline={true}
          style={styles.input__title}
          placeholderTextColor="#9A9A9A"
          placeholder="Title"
          value={createNote.title}
          name="Title"
          onChangeText={(e) => addNoteHandler("title", e)}
        />
        <TextInput
          style={styles.input__body}
          multiline={true}
          placeholderTextColor="#9A9A9A"
          placeholder="Type something..."
          name="description"
          value={createNote.description}
          onChangeText={(e) => addNoteHandler("description", e)}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={saveChangesVisible}
        >
          <View style={styles.alertContainer}>
            <View style={styles.alertWrapper}>
              <View style={{ marginBottom: 15 }}>
                <Image source={require("../../assets/icon/helpIcon.png")} />
              </View>
              <Text
                style={{ fontSize: 26, color: "#CFCFCF", marginBottom: 30 }}
              >
                Save changes ?
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 112,
                    height: 39,
                    backgroundColor: "#FF0000",
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                  onPress={onCloseSave}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    Discard
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 112,
                    height: 39,
                    backgroundColor: "#30BE71",
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                  onPress={onNoteSaveHandler}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={discardChangesVisible}
        >
          <View style={styles.alertContainer}>
            <View style={styles.alertWrapper}>
              <View style={{ marginBottom: 15 }}>
                <Image source={require("../../assets/icon/helpIcon.png")} />
              </View>
              <Text
                style={{ fontSize: 25, color: "#CFCFCF", marginBottom: 30 }}
              >
                Are your sure you want discard your changes ?
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 112,
                    height: 39,
                    backgroundColor: "#FF0000",
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                  onPress={onDiscardHandler}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    Discard
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 112,
                    height: 39,
                    backgroundColor: "#30BE71",
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                  onPress={() => setDiscardChangesVisible(false)}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    Keep
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    borderRadius: 5,
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  container__Opacity: {
    flex: 1,
    backgroundColor: "#252525",
    borderRadius: 5,
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    opacity: 0.7,
  },
  topNav: {
    marginTop: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  utils__searchIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#3B3B3B",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  utils__infoIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#3B3B3B",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 8,
  },
  input__title: {
    fontSize: 40,
    marginTop: 0,
    color: "#9A9A9A",
  },
  input__body: {
    marginTop: 15,
    fontSize: 23,
    color: "#9A9A9A",
  },
  alertContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  alertWrapper: {
    width: 300,
    height: 236,
    backgroundColor: "#252525",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default AddNotes;
