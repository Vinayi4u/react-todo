import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addNewTodo, deleteTodo } from "./TodoFunc.js";
import "./App.css";

function App() {
  const [todoInput, updateTodoInput] = useState("");
  const [todoList, updateTodoList] = useState([
    {
      id: uuidv4(),
      task: "Learn React",
    },
  ]);

  return (
    <>
      <div className="container mt-5 w-50">
        <h1 className="text-center">To-do App Using React</h1>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={todoInput}
            onChange={(e) => updateTodoInput(e.target.value)}
          />
          <button
            onClick={() =>
              addNewTodo(todoInput, updateTodoInput, todoList, updateTodoList)
            }
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
        <ul className="list-group mt-4">
          {todoList.map((todo) => {
            return (
              <li className="list-group-item p-2">
                <p className="mt-3">{todo.task}</p>
                <button
                  onClick={() => deleteTodo(todo.id, todoList, updateTodoList)}
                  className="btn"
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
