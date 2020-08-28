import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Container, GlobalStyle, Content, FormForgotPassword } from './styles';

import logo from '../../assets/img/logo-credpago.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';


function ForgotPassword() {
  const { register } = useForm();

  return (
    <Container className="container" >
      <GlobalStyle />
      <Content>
        <img src={logo} alt="Logo" />
        <FormForgotPassword>
          <h2>Registro</h2>
          <Input type="text" label="Email" placeholder="seu@email.com" name="email" required register={register} />
          <Button type="submit">Enviar email</Button>
          <Link to="/">Fazer login</Link>
        </FormForgotPassword>
      </Content>
    </Container>
  );
}

export default ForgotPassword;