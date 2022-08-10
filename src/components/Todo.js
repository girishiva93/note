import React from "react";
import NodeListing from "./NodeListing";

const Todo = ({ todoTask }) => {
  return todoTask.map((Note, key) => <NodeListing Note={Note} key={key} />);
};

export default Todo;
