import React, { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError('заполни все поля!');
      return;
    }
    if (password !== confirmPassword) {
      setError('пароли не совпадают');
      return;
    }
    setError(null);
    onSubmit({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      {error && <p className="Ошибка">{error}</p>}
      <input
        type="text"
        placeholder="Имя"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <input
        type="password"
        placeholder="подтверждение пароля"
        value={confirmPassword}
        onChange={event => setConfirmPassword(event.target.value)}
      />
      <button type="submit">регистрация</button>
    </form>
  );
};

export default RegisterForm;