import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      username,
      password
    });

    navigate('/profile');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Page</h2>

        <label htmlFor="username">Enter Username: </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <label htmlFor="password">Enter Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}