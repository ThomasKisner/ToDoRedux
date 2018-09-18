import React from "react";
import { connect } from "react-redux";
import { markCompleted } from "../actions";
import ToDo from "./ToDo";
// need to import action name from actions

const ToDoList = ({ todos, toggleToDo }) => {
  <ul>
    {todos.map(todo => (
      <ToDo key={todo.id} {...todo} onClick={() => toggleToDo(todo.id)} />
    ))}
  </ul>;
};

const mapStateToProps = state => ({
  todos: state.todo
});

export default connect(
  mapStateToProps,
  { markCompleted }
)(ToDo);

export default ToDoList;
