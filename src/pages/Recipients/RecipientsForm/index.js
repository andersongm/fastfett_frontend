import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import InputMask from '~/components/InputMask';
import { toast } from 'react-toastify';
import { Container, Content, HeaderForm } from './styles';
import SaveButton from '../../../components/SaveButton';
import BackButton from '../../../components/BackButton';
import { getTitlePage } from '~/util/Util';
import * as Yup from 'yup';

import api from '~/services/api';

export default function RecipientsForm({ location }) {

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    street: Yup.string().required('Logradouro é obrigatório'),
    number: Yup.string(),
    complement: Yup.string(),
    city: Yup.string().required('Cidade é obrigatória'),
    state: Yup.string().max(2).required('Estado é obrigatório'),
    zip_code: Yup.string().required('Cep é obrigatório'),
  });

  const recipients = location.state?.item;
  const item = location.state?.item;
  const operation = location.pathname.split('/')[2];

  async function handleSubmit(data) {

    try {

      let response = null;

      // Edicao da Encomenda
      if (item) {
        const { id } = item;
        response = await api.put(`/recipients/${id}`, data);
      } else {
        response = await api.post('/recipients', data);
      }

      if (response.data) {
        toast.success('Destinatário Salvo com Sucesso!')
      }
    } catch (error) {
      toast.error(`Falha ao salvar Destinatrário! \n ${error}`);
    }
  }

  return (
    <Container>
      <Form schema={schema} id="recipients" initialData={recipients} onSubmit={handleSubmit}>
        <HeaderForm>
          <h2>{getTitlePage(operation, "Destinatários")}</h2>
          <div>
            <BackButton to="/recipients" />
            <SaveButton type="submit" />
          </div>
        </HeaderForm>
        <Content>
          <div className="row-1">
            <label htmlFor="name">Nome</label>
            <Input name="name" placeholder="Nome" />
          </div>
          <div className="row-2">
            <div>
              <label htmlFor="street">Logradouro</label>
              <Input name="street" type="text" placeholder="Rua ou Av" />
            </div>
            <div>
              <label htmlFor="number">Numero</label>
              <Input name="number" type="text" placeholder="Numero" />
            </div>
            <div>
              <label htmlFor="complement">Complemento</label>
              <Input name="complement" type="text" placeholder="Complemento" />
            </div>
          </div>
          <div className="row-3">
            <div>
              <label htmlFor="city">Cidade</label>
              <Input name="city" type="text" placeholder="Cidade" />
            </div>
            <div>
              <label htmlFor="state">Estado</label>
              <Input name="state" type="text" placeholder="Estado" />
            </div>
            <div>
              <label htmlFor="zip_code">CEP</label>
              <InputMask
                name="zip_code"
                mask="99999-999"
                placeholder="CEP"
              />
            </div>
          </div>
        </Content>
      </Form>
    </Container >
  );
}

RecipientsForm.defaultProps = {
  recipients: [],
};
