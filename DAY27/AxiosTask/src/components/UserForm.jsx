import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ currentUser, onSave }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({ name: "", email: "" });
    }
  }, [currentUser]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (currentUser && currentUser.id) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`, user);
        console.log("Updated user:", response.data);
        onSave(response.data);
      } else {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
        console.log("Added user:", response.data);
        onSave(response.data);
      }
      setUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{borderRadius:"7px",borderColor:"white"}}
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input style={{borderRadius:"7px",borderColor:"white"}}
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
