import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodos = (todoOldId, todoNew) => {
    if (!todoNew || /^\s*$/.test(todoNew)) return;
    setTodos((prev) =>
      prev.map((item) => (item.id === todoOldId ? { ...item, text: todoNew } : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.iscomplete = !todo.iscomplete;
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What are your plans for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        updateTodos={updateTodos}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoList;


