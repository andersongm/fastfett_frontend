import React, { useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import AsyncSelect from '~/components/AsyncSelect';
import { Container, Content, DataDelivery, HeaderForm } from './styles';
import SaveButton from '../../../components/SaveButton';
import BackButton from '../../../components/BackButton';
import { getTitlePage } from '~/util/Util';
import api from '~/services/api';

export default function DeliveryForm({ location }) {

  const schema = Yup.object().shape({
    recipient_id: Yup.string().nullable().required('Destinatário é obrigatório'),
    deliveryman_id: Yup.string().nullable().required('Entregador é obrigatório'),
    product: Yup.string().required('Produto é obrigatório'),
  });

  const recOptions = [];
  const delOptions = [];
  const deliveries = location.state?.item;
  const item = location.state?.item;
  const operation = location.pathname.split('/')[2];

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

      deliverymans.map(del => (
        delOptions.push({
          value: del.id,
          label: del.name
        })
      ))
    }

    loadRecipients()
    loadDeliverymans()

  }, [delOptions, recOptions])

  async function handleSubmit(data) {
    try {

      let response = null;

      // Edicao da Encomenda
      if (item) {
        const { id } = item;
        response = await api.put(`/deliveries/${id}`, data);
      } else {
        response = await api.post('/deliveries', data);
      }

      if (response.data) {
        toast.success('Encomenda Salva com Sucesso!')
      }
    } catch (error) {
      toast.error(`Falha ao salvar encomenda! \n ${error}`);
    }
  }

  return (
    <Container>
      <Form schema={schema} id="delivery" initialData={deliveries} onSubmit={handleSubmit}>
        <HeaderForm>
          <h2>{getTitlePage(operation,"Encomendas")}</h2>
          <div>
            <BackButton to="/deliveries" />
            <SaveButton type="submit" />
          </div>
        </HeaderForm>
        <Content>
          <DataDelivery>
            <div className="row">
              <AsyncSelect
                label="Destinatário"
                name="recipient_id"
                entity="recipients"
                placeholder="Selecione..."
                selectValue={item?.recipient.name}
                required
                isDisabled={operation === 'show' ? true : false}
              />
            </div>
            <div className="row">
              <AsyncSelect
                label="Entregador"
                name="deliveryman_id"
                entity="deliverymans"
                placeholder="Selecione..."
                selectValue={item?.deliveryman.name}
                required
                isDisabled={operation === 'show' ? true : false}
              />
            </div>
          </DataDelivery>
          <label htmlFor="product">Nome do Produto</label>
          <Input name="product" type="text" placeholder="Nome do Produto" disabled={operation === 'show' ? true : false}/>
        </Content>
      </Form>
    </Container>
  );
}

DeliveryForm.defaultProps = {
  deliveries: [],
};
