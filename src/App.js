import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  return (
    <div className="app">
      <div className="todo-list" />
    </div>
  );
};

export default App;
