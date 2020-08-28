import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Container, GlobalStyle, Content, FormRegister } from './styles';

import logo from '../../assets/img/logo-credpago.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { createAccount } from '../../services/querys';
import { useState } from 'react';

function Register() {
  const { register, handleSubmit } = useForm();
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();

  const handleRegister = async (data) => {
    // e.preventDefault();
    if (data) {
      if (data.password === data.confirmPassword) {
        setPasswordError(false);
        if (await createAccount(data.email, data.password, data.name)) {
          history.push('/');
        } else {
          alert('Error');
        }
      } else {
        setPasswordError(true);
      }
      
    }
    
    // history.push('/principal');
  }
  return (
    <Container className="container" >
      <GlobalStyle />
      <Content>
        <img src={logo} alt="Logo" />
        <FormRegister onSubmit={handleSubmit(handleRegister)}>
          <h2>Registro</h2>
          <Input type="text" label="Email" placeholder="seu@email.com" name="email" required register={register} />
          <Input type="password" label="Senha" placeholder="******" error={passwordError} name="password" required register={register} />
          <Input type="password" label="Confirmar senha" placeholder="******" name="confirmPassword" error={passwordError} required register={register} />
          <Input type="text" label="Nome" placeholder="******" name="name" required register={register} />
          <Button type="submit">Registrar-se</Button>
          <Link to="/">Fazer login</Link>
        </FormRegister>
      </Content>
    </Container>
  );
}

export default Register;