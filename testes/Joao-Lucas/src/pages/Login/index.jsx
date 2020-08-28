import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Container, GlobalStyle, Content, FormLogin } from './styles';

import logo from '../../assets/img/logo-credpago.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { verifyLogin } from '../../services/querys';
import { login } from '../../services/auth';


function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [error, setError] = useState(false);


  const handleLogin = async (data) => {
    const dataUser = await verifyLogin(data.email, data.password);

    if (dataUser) {
      login(new Buffer(dataUser.email).toString('base64'));
      dispatch({ type: 'ADD_USER', payload: dataUser })
      history.push('/main');
    } else {
      setError(true);
    }
    
  }
  return (
    <Container className="container" >
      <GlobalStyle />
      <Content>
        <img src={logo} alt="Logo" />
        <FormLogin error={error} onSubmit={handleSubmit(handleLogin)}>
          <Input type="text" label="Email" placeholder="seu@email.com" name="email" required register={register} />
          <Input type="password" label="Senha" placeholder="******" name="password" required register={register} />
          <Button type="submit">Entrar</Button>
          <p>Email ou senha incorretos!</p>
          <Link to="/forgotPassword" className="forgotPassword">Esqueci minha senha</Link>
          <Link to="/register">Criar conta</Link>
        </FormLogin>
      </Content>
    </Container>
  );
}

export default Login;