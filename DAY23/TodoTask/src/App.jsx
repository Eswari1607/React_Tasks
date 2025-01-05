// App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    return todo.status === filter;
  });

  return (
    <div className="App">
      <h1>My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-header">
        <h3 className='todos'>My Todos</h3>
        <div className="todo-filter">
          <span><h1 className='todos'>Status</h1></span>
          <TodoFilter setFilter={setFilter} />
        </div>
      </div>
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
