import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles';
import logo from '../../assets/fastfeet-logo.png';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email válido')
      .required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="">SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <label htmlFor="">SUA SENHA</label>
        <Input name="password" type="password" />
        <button type="submit">Entrar no Sistema</button>
      </Form>
    </Container>
  );
}