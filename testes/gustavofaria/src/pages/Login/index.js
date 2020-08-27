import React, { useState, useEffect } from 'react';

import { Login } from './styles';

import Logo from '../../assets/Logo.svg';

import Loading from '../../components/Loading';
import FormLogin from './FormLogin';
import FormSingUp from './FormSingUp';

export default () => {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // window.localStorage.clear();
    window.document.title = 'CredPago | Login';
    const user = window.localStorage.getItem('user');
    if (user) { window.location.replace('/'); } else { setLoading(false); }
  }, []);

  return (
    <Login>
      <Loading visible={loading} />

      <img src={Logo} alt="Logo" />
      {
        isLogin
          ? <FormLogin isLogin={isLogin} setIsLogin={setIsLogin} />
          : <FormSingUp isLogin={isLogin} setIsLogin={setIsLogin} />
      }
    </Login>
  );
};
