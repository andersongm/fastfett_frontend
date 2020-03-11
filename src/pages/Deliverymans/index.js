import React from 'react';

import { Container, TableList } from './styles';

import HeaderPage from '~/components/HeaderPage';


export default function Deliveriemans() {
  return (
    <Container>
      <HeaderPage title="Gerenciando Entregadores" pathButton="/deliveriemans"/>
      <TableList>
      <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>#01</td>
              <td>Juca</td>
              <td>Romário</td>
              <td>Uberlandia</td>
              <td>Minas Gerais</td>
              <td>PENDENTE</td>
              <td>ACOES</td>
            </tr>
        </tbody>
      </TableList>
    </Container>
  )
}
