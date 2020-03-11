import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';

import { Container, Content, DataDelivery, HeaderForm, selectStyles } from './styles';
import SaveButton from '../../../components/SaveButton';
import BackButton from '../../../components/BackButton';

import api from '~/services/api';

export default function DeliveryForm() {

  const recOptions = [];
  const delOptions = [];

  //const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');
      const recipients = response.data;

      recipients.map(rec => (
        recOptions.push({
          value: rec.id,
          label: rec.name
        })
      ))
    }

    async function loadDeliverymans() {
      const response = await api.get('/deliverymans');
      const deliverymans = response.data;

      console.log(deliverymans);

      deliverymans.map(del => (
        delOptions.push({
          value: del.id,
          label: del.name
        })
      ))
    }

    loadRecipients()
    loadDeliverymans()

  },[delOptions,recOptions])

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form id="delivery" onSubmit={handleSubmit}>
        <HeaderForm>
          <h2>Cadastro de Encomendas</h2>
          <div>
            <BackButton to="/deliveries" />
            <SaveButton type="submit" />
          </div>
        </HeaderForm>
        <Content>
          <DataDelivery>
            <div className="row">
              <label htmlFor="recipient_id">Destinatário</label>
              <Select options={recOptions} styles={selectStyles} placeholder="Selecione..." name="recipient_id"/>
            </div>
            <div className="row">
              <label htmlFor="deliveryman_id">Entregador</label>
              {/* <Input name="deliveryman" type="text" placeholder="Entregador"/> */}
              <Select options={delOptions} styles={selectStyles} placeholder="Selecione..." name="deliveryman_id" />
            </div>
          </DataDelivery>
          <label htmlFor="product">Nome do Produto</label>
          <Input name="product" type="text" placeholder="Nome do Produto"/>
        </Content>
      </Form>
    </Container>
  );
}
