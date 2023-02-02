import React, { useState } from 'react';
import CocktailList from './components/CocktailList';
import OrderPage from './components/OrderPage';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [order, setOrder] = useState([]);
  const handleOrder = cocktail => {
    setOrder([...order, cocktail]);
  };

  const handleRemove = cocktail => {
    setOrder(order.filter(item => item !== cocktail));
  };



  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const handleLogin = (data) => {
    // logic to handle login data, such as checking credentials against a database
    if (data.username === 'user' && data.password === 'pass') {
      setUser({ username: data.username });
    }
  };

  const handleRegister = (data) => {
    // logic to handle registration data, such as storing new user data in a database
    setUser({ username: data.username });
  };

  return (
//     
//   );

// (
  <div>
      
      {user ? (
        <div className="app">
          <h1>Бар!          (Список заказа внизу, т.к. "position: sticky" не работает)</h1>
          <p>Привет, {user.username}!</p>
          <CocktailList onOrder={handleOrder} />
          {order.length > 0 && <OrderPage order={order} onRemove={handleRemove} />}
        </div>
      ) : (
        <>
          {isLogin ? (
            <LoginForm onSubmit={handleLogin} />
          ) : (
            <RegisterForm onSubmit={handleRegister} />
          )}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Регистрация' : 'Логин'}
          </button>
        </>
      )}
    </div>
  );
};


export default App;