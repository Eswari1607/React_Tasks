// components/TodoItem.js
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);
  const [dropdownColor, setDropdownColor] = useState(status === 'Completed' ? '#28a745' : '#dc3545');

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      name,
      description,
      status
    });
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setDropdownColor(newStatus === 'Completed' ? '#28a745' : '#dc3545');
    updateTodo({
      ...todo,
      status: newStatus
    });
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <button style={{color:'white',backgroundColor:'#28a745',marginTop:20}} onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <div className="todo-details">
            <h3>Name: {todo.name}</h3>
            <p>Description: {todo.description}</p>
            <div className="status-dropdown">
              <span>Status</span>
              <select
                value={status}
                onChange={handleStatusChange}
                style={{ backgroundColor: dropdownColor }}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
             
            </div>
          </div>
          <div className="todo-actions">
            <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
