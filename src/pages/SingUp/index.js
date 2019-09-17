import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { singUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('É obrigatório informar um nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('É obrigatório informar um e-mail'),
  password: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres')
    .required('É obrigatótio informar a senha'),
});

export default function SingUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(singUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
