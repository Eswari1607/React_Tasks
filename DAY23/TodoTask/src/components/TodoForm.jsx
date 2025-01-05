// components/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoName || !todoDescription) return;

    const newTodo = {
      id: Date.now(),
      name: todoName,
      description: todoDescription,
      status: 'Not Completed'
    };

    addTodo(newTodo);
    setTodoName('');
    setTodoDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Todo Name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        className="todo-input"
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
