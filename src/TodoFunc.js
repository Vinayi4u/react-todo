import { v4 as uuidv4 } from "uuid";

export function addNewTodo(
  todoInput,
  updateTodoInput,
  todoList,
  updateTodoList
) {
  updateTodoList([
    ...todoList,
    {
      id: uuidv4(),
      task: todoInput,
    },
  ]);
  updateTodoInput("");
  // alert(todoList);
}

export function deleteTodo(id, todoList, updateTodoList) {
  const newTodo = todoList.filter((todo) => todo.id !== id);
  updateTodoList(newTodo);
}
