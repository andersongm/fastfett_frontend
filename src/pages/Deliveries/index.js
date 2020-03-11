import React, { useEffect, useState } from 'react';
import { Container, TableList } from './styles';
import { MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import InitialName from '~/components/InitialName';
import PillsStatus from '~/components/PillsStatus';
import HeaderPage from '../../components/HeaderPage';
import DropDownMenu from '~/components/DropDownMenu';

function getLetters(name) {
  const arr = String(name).split(" ");
  return arr[0].substr(0, 1) + arr[1].substr(0, 1);
}

function getColor(status) {
  const color = {
    'PENDENTE': ({ back: '#f0f0df', color: '#c1bc35' }),
    'CANCELADA': ({ back: '#fab0b0', color: '#de3b3b' }),
    'RETIRADA': ({ back: '#bad2ff', color: '#4d85ee' }),
    'ENTREGUE': ({ back: '#dff0df', color: '#2ca42b' })
  }
  return color[status];
}


export default function Deliveries() {

  const [deliveries, setDeliveries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState([]);
  const [item, setItem] = useState();


  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries');
      setDeliveries(response.data);
    }

    loadDeliveries();

  }, [])

  function handleVisibleMenu(x, y, id) {
    setItem(id);
    setPosition([x, y]);
    setVisible(!visible);
  }

  function handleMouse() {
    if (visible) {
      setVisible(false);
    }
  }

  return (
    <Container onMouseDown={handleMouse}>
      <HeaderPage title="Gerenciando Encomendas" pathButton="/deliveries/add" />
      <DropDownMenu visible={visible} position={position} item={item} />
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
          {deliveries.map((delivery, index) => (
            <tr key={delivery.id} >
              <td>#{String(delivery.id).padStart(2, "0")}</td>
              <td>{delivery.deliveryman.name}</td>
              <td><InitialName letters={getLetters(delivery.recipient.name)} />{delivery.recipient.name}</td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td><PillsStatus color={getColor(delivery.status)}>{delivery.status}</PillsStatus></td>
              {/* <td><button onClick={handleVisibleMenu}><MdMoreHoriz size={20} color="#666" /></button><DropDownMenu visible={visible}/></td> */}
              <td><MdMoreHoriz size={20} color="#666" onClick={(e) => handleVisibleMenu(e.pageX, e.pageY, delivery)} /></td>
            </tr>
          ))}
        </tbody>
      </TableList>
    </Container>
  )
}
