import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Container, GlobalStyle, Content, User, FormUser } from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';
import { useState } from 'react';



function Profile() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const user = useSelector(state => state.user);
  const [result, setResult] = useState({
    error: false,
    success: false,
  })

  const handleUser = async (data) => {
    if (data) {
      const dataUser = await api.get(`/users/${user.id}`);
      if (dataUser.data.password === data.password) {
        await api.put(`/users/${user.id}`, data, {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        })
        const { data: newData } = await api.get(`/users/${user.id}`);
        const dataAPI = {
          name: newData.name,
          email: newData.email,
          id: newData.id,
        }
        setResult({
          error: false,
          success: true
        })
        dispatch({ type: 'ADD_USER', payload: dataAPI })
      } else {
        setResult({
          error: true,
          success: false
        })
      }
    }
  }

  return (
    <Container className="container">
      <GlobalStyle />
      <Header />
      <Content>
        <User>
          <FormUser onSubmit={handleSubmit(handleUser)}>
            <h2>Usuário</h2>
            <Input type="text" label="Email" placeholder="seu@email.com" defaultValue={user && user.email} name="email" required register={register} />
            <Input type="text" label="Nome" placeholder="******" defaultValue={user && user.name} name="name" required register={register} />
            <Input type="password" label="Senha" placeholder="******" name="password" error={result.error} required register={register} />
            <Button type="submit">Alterar dados</Button>
            <p className={result.error ? 'error' : result.success ? 'success' : null}>{result.error ? 'Senha incorreta!' : result.success ? 'Alterado com sucesso!' : null}</p>
          </FormUser>
        </User>
      </Content>
    </Container>
  );
}

export default Profile;