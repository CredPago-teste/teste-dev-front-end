import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Input from '../../../components/Input';

const Component = ({ isLogin, setIsLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('none');

  const handleSetIsLogin = () => setIsLogin(!isLogin);

  useEffect(() => {
    window.document.title = 'CredPago | Cadastrar';
    setName('');
    setEmail('');
    setPassword('');
  }, [isLogin]);

  const checkEmail = () => {
    const users = JSON.parse(window.localStorage.getItem('all_users')) || [];

    for (let index = 0; index < users.length; index += 1) {
      const user = users[index];
      if (user.email === email) return true;
    }
    return false;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (checkEmail()) {
      setLoginError('flex');
      return;
    }
    const user = {
      id: uuidv4(),
      name,
      email,
      password,
    };
    const users = JSON.parse(window.localStorage.getItem('all_users')) || [];
    const allUsers = JSON.stringify([...users, user]);
    window.localStorage.setItem('all_users', allUsers);
    handleSetIsLogin();
  };

  return (
    <form onSubmit={handleOnSubmit}>

      <Input type="text" label="Nome Completo" placeHolder="Nome Completo" inputValue={name} setInputValue={setName} required />
      <Input type="email" label="Email" placeHolder="email@exemplo.com" inputValue={email} setInputValue={setEmail} required />
      <Input type="password" label="Senha" placeHolder="Digite sua senha" inputValue={password} setInputValue={setPassword} required />

      <div className="login-error">
        <p style={{ display: loginError }}>* O email já está sendo usado.</p>
      </div>

      <button className="stretched big" type="submit">Cadastrar</button>

      <div className="footer">
        <p>Já tem uma conta?</p>
        <button className="transparent" type="button" onClick={handleSetIsLogin}>Entrar</button>
      </div>

    </form>
  );
};

Component.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setIsLogin: PropTypes.func.isRequired,
};

export default Component;
