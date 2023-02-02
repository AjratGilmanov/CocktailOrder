import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    if (!username || !password) {
      setError('введите пароль и имя');
      return;
    }
    setError(null);
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Логин</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Имя"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">войти</button>
    </form>
  );
};

export default LoginForm;