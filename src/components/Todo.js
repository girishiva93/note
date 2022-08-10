import React from "react";
import {
  View,
} from "react-native";

import NodeListing from "./NodeListing";

const Todo = ({ todoTask }) => {
  return (
    <View style={{flex:1, minHeight:794,}} >
      {todoTask.map((Note, key) => (
        <NodeListing Note={Note} key={key} />
      ))}
    </View>
  );
};

export default Todo;
