import React, { useState } from "react";
import "./styles.css";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return <div />;
};
const App = () => {
  const [todo, setTodo] = useState([]);

  return (
    <div className="app">
      <div className="todo-list" />
      {todo.map((item, index) => (
        <Todo key={item} />
      ))}
    </div>
  );
};

export default App;
