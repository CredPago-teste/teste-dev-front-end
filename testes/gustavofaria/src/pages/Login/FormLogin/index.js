import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../components/Input';

const Component = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('none');

  const handleSetIsLogin = () => setIsLogin(!isLogin);

  useEffect(() => {
    window.document.title = 'CredPago | Entrar';
    setEmail('');
    setPassword('');
    setLoginError('none');
  }, [isLogin]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(window.localStorage.getItem('all_users')) || [];

    for (let index = 0; index < users.length; index += 1) {
      const user = users[index];
      if (user.email === email) {
        if (user.password === password) {
          const currentUser = { name: user.name };
          window.localStorage.setItem('user', JSON.stringify(currentUser));
          window.location.replace('/');
          return;
        }
      }
    }

    setLoginError('flex');
    setPassword('');
  };

  return (
    <form onSubmit={handleOnSubmit}>

      <Input type="email" label="Email" placeHolder="email@exemplo.com" inputValue={email} setInputValue={setEmail} required />
      <Input type="password" label="Senha" placeHolder="Digite sua senha" inputValue={password} setInputValue={setPassword} required />

      <div className="login-error">
        <p style={{ display: loginError }}>* Usuário ou senha inválidos.</p>
      </div>

      <a className="forgot-password" href="#password">Esqueci minha senha</a>
      <button className="stretched big" type="submit">Entrar</button>

      <div className="footer">
        <p>Não tem uma conta?</p>
        <button className="transparent" type="button" onClick={handleSetIsLogin}>Cadastrar</button>
      </div>

    </form>
  );
};

Component.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setIsLogin: PropTypes.func.isRequired,
};

export default Component;
