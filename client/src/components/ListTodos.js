import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import bootstrap from "bootstrap";

const Listtodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5001/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
        method: "DELETE",
      });
      setTodos((prevToDos) => prevToDos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const todoElements = todos.map((todo) => {
    return (
      <tr key={todo.todo_id}>
        <td>{todo.description}</td>
        <td>
          <EditTodo todo={todo} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.todo_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{todoElements}</tbody>
      </table>
    </>
  );
};

export default Listtodos;
