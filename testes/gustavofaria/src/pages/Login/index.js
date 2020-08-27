import React, { useState, useEffect } from 'react';

import { Login } from './styles';

import Logo from '../../assets/Logo.svg';

import Loading from '../../components/Loading';
import Input from '../../components/Input';

export default () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('none');

  useEffect(() => {
    window.document.title = 'CredPago | Login';
    const user = window.localStorage.getItem('user');
    if (user) { window.location.replace('/'); } else { setLoading(false); }
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (email === 'email@credpago.com.br' && password === 'credpago') {
      const user = { name: 'João Corretor' };
      window.localStorage.setItem('user', JSON.stringify(user));
      window.location.replace('/');
    } else {
      setLoginError('flex');
      setPassword('');
    }
  };

  return (
    <Login>
      <Loading visible={loading} />

      <img src={Logo} alt="Logo" />
      <form onSubmit={handleOnSubmit}>

        <Input type="email" label="Email" placeHolder="" inputValue={email} setInputValue={setEmail} required />
        <Input type="password" label="Senha" placeHolder="" inputValue={password} setInputValue={setPassword} required />

        <div className="login-error">
          <p style={{ display: loginError }}>* Usuário ou senha inválidos.</p>
        </div>

        <button className="stretched big" type="submit">Entrar</button>

        <a className="forgot-password" href="#password">Esqueci minha senha</a>

      </form>
    </Login>
  );
};
