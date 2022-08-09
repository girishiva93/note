import React from "react";
import { Text, View, TouchableOpacity } from "react-native";


const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};


const Todo = ({ todoTask }) => {
  return todoTask.map(function (task, key) {
    return (
      <TouchableOpacity key={key}>         
        <View style={{width:'100%', backgroundColor:generateColor(), margin:10, padding:30, borderRadius:10, fontSize:20}} >
           <Text style={{fontSize:20}}>{task.name}</Text>
      </View>
      </TouchableOpacity>
    );
  });
};



export default Todo;
