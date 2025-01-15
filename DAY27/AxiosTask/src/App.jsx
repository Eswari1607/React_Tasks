import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import axios from "axios";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("Fetched users:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = user => {
    console.log("Edit user:", user);
    setCurrentUser(user);
  };

  const handleDelete = async userId => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      console.log("Deleted user with ID:", userId);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      setCurrentUser(null);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSave = savedUser => {
    console.log("Save user:", savedUser);
    setUsers(prevUsers => {
      const index = prevUsers.findIndex(user => user.id === savedUser.id);
      if (index !== -1) {
        const updatedUsers = [...prevUsers];
        updatedUsers[index] = savedUser;
        return updatedUsers;
      }
      return [...prevUsers, savedUser];
    });
    setCurrentUser(null);
  };

  return (
    <div className="app-container">
      <h1>CRUD Application</h1>
      <UserForm currentUser={currentUser} onSave={handleSave} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
