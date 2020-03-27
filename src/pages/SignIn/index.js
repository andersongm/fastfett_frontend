import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles';
import logo from '../../assets/fastfeet-logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {

  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {

    dispatch(signInRequest(email,password));
  }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="">SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <label htmlFor="">SUA SENHA</label>
        <Input name="password" type="password" placeholder="Password"/>
        <button type="submit">Entrar no Sistema</button>
      </Form>
    </Container>
  );
}
