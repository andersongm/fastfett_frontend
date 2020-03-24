import React, { useEffect, useState } from 'react';
import { Container, TableList } from './styles';
import { MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import HeaderPage from '../../components/HeaderPage';
import DropDownMenu from '~/components/DropDownMenu';

import memoize from "memoize-one"

export default function Recipients({location}) {

  const [recipients, setRecipients] = useState([]);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const idDelete = location.state?.id;

  useEffect(() => {

    async function loadRecipients() {
      console.log('buscando recipients...');
      const response = await api.get('/recipients');
      setRecipients(response.data);
    }

    loadRecipients();

  }, [idDelete])

  const filterRecipients = memoize((recipients, valor) => recipients.filter(recipient => recipient.name.match(new RegExp(valor, 'i'))));
  const recipientSearch = filterRecipients(recipients.filter(r => r.id !== idDelete), name);

  function handleMenu(id) {
    setCurrentRow(id);
    setVisible(!visible);
  }

  return (
    <Container>
      <HeaderPage
        title="Gerenciando Destinatários"
        pathButton="/recipients/add"
        placeholderSearch="Buscar Destinatários"
        onChange={e => setName(e.target.value)} value={name}/>
      <TableList>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Açoes</th>
          </tr>
        </thead>
        <tbody>
          {recipientSearch.map((recipient, index) => (
            <tr key={recipient.id} >
              <td>#{String(recipient.id).padStart(2, "0")}</td>
              <td>{recipient.name}</td>
              <td>{recipient.address}</td>
              <td>{index === currentRow ? (<DropDownMenu visible={visible} entity="recipients" item={recipient}/>) : ''}<MdMoreHoriz size={20} color="#666" onClick={() => handleMenu(index)} /></td>
            </tr>
          ))}
        </tbody>
      </TableList>
    </Container>
  )
}
