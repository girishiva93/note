import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";


const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};

const NodeListing = ({Note}) => {
  const onNoteDelete = (id) => {
    console.log(id);
  };

  const [deleteNote, setDeleteNote] = useState(false);

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
        <TouchableOpacity onLongPress={() => setDeleteNote(!deleteNote)}>
          <View
            style={{
              width: "100%",
              backgroundColor: generateColor(),
              margin: 10,
              padding: 30,
              borderRadius: 10,
              fontSize: 20,
            }}
          >
            <Text style={{ fontSize: 20 }}>{Note?.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NodeListing;
