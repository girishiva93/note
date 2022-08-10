import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteNotes } from "../../reducer/notesSlice";
import { useNavigation } from "@react-navigation/native";

import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../config/Config";

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};

const NodeListing = ({ Note }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [deleteNote, setDeleteNote] = useState(false);

  const onEditNoteClick = () => {

    navigation.navigate("Edit", { noteId: Note.id });
  };

  const onNoteDelete = async (id) => {
    await deleteDoc(doc(db, "notes", `${id}`))
      .then((res) => {
        dispatch(deleteNotes(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      {deleteNote ? (
        <View
          style={{
            width: "100%",
            backgroundColor: "red",
            marginTop: 10,
            marginBottom: 10,
            padding: 30,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onLongPress={() => setDeleteNote(!deleteNote)}
            onPress={() => onNoteDelete(Note.id)}
          >
            <Image source={require("../../assets/icon/deleteIcon.png")} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onLongPress={() => setDeleteNote(!deleteNote)}
          onPress={onEditNoteClick}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: generateColor(),
              margin: 10,
              padding: 30,
              height: 100,
              borderRadius: 10,
              fontSize: 20,
            }}
          >
            <Text style={{ fontSize: 20 }}>{Note?.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NodeListing;
