import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import AvatarInput from '../AvatarInput';
import { Container, Content, HeaderForm } from './styles';
import SaveButton from '../../../components/SaveButton';
import BackButton from '../../../components/BackButton';
import { getTitlePage } from '~/util/Util';

import api from '~/services/api';

export default function DeliveryMansForm({ location }) {

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email().required('Email é obrigatório'),
  });

  const deliverymans = location.state?.item;
  const item = location.state?.item;
  const operation = location.pathname.split('/')[2];

  async function handleSubmit(data) {

    try {

      let response = null;

      if (item) {
        const { id } = item;
        response = await api.put(`/deliverymans/${id}`, data);
      } else {
        response = await api.post('/deliverymans', data);
      }

      if (response.data) {
        toast.success('Entregador Salvo com Sucesso!')
      }
    } catch (error) {
      toast.error(`Falha ao salvar entregador! \n ${error}`);
    }
  }

  return (
    <Container>
      <Form schema={schema} id="delivery" initialData={deliverymans} onSubmit={handleSubmit}>
        <HeaderForm>
          <h2>{getTitlePage(operation,"Entregadores")}</h2>
          <div>
            <BackButton to="/deliverymans" />
            <SaveButton type="submit" />
          </div>
        </HeaderForm>
        <Content>

          <AvatarInput name="avatar_id" avatar={item?.avatar.url}/>

          <label htmlFor="name">Nome</label>
          <Input name="name" placeholder="Nome"/>
          <label htmlFor="email">Email</label>
          <Input name="email" type="text" placeholder="email@email.com" />
        </Content>
      </Form>
    </Container >
  );
}

DeliveryMansForm.defaultProps = {
  deliverymans: [],
};
