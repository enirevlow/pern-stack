import React from "react";
import "./App.css";
import Inputtodo from "./components/InputTodo";
import Listtodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="container">
        <Inputtodo />
        <Listtodos />
      </div>
    </>
  );
}

export default App;
