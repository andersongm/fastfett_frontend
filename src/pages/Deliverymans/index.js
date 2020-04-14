import React, { useEffect, useState } from 'react';
import { Container, TableList, ImageDeliveryman } from './styles';
import { MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import HeaderPage from '../../components/HeaderPage';
import DropDownMenu from '~/components/DropDownMenu';
import Pagination from '~/components/Pagination';

// import memoize from "memoize-one"

export default function Deliverymans({location}) {

  const [deliverymans, setDeliverieMans] = useState([]);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurentPage] = useState(1);
  const idDelete = location.state?.id;

  async function loadDeliverieMans(page = 1) {
    const response = await api.get('/deliverymans', {
      params: {
        name,
        page
      }
    });

    const { count, rows } = response.data;
    setDeliverieMans(rows);
    setCurentPage(page);
    setTotalRecords(count);
  }

  useEffect(() => {
    loadDeliverieMans();
  }, [idDelete, name])

  // const filterDeliveryMan = memoize((deliverymans, valor) => deliverymans.filter(deliveryMan => deliveryMan.name.match(new RegExp(valor, 'i'))));
  // const deliveryManSearch = filterDeliveryMan(deliverymans.filter(d => d.id !== idDelete), name);

  function handleMenu(id) {
    setCurrentRow(id);
    setVisible(!visible);
  }

  return (
    <Container>
      <HeaderPage
        title="Gerenciando Entregadores"
        pathButton="/deliverymans/add"
        placeholderSearch="Buscar Entregadores"
        onChange={e => setName(e.target.value)} value={name}
        clear={() => setName('')}
        />
      <TableList>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Açoes</th>
          </tr>
        </thead>
        <tbody>
          {deliverymans.map((deliveryMan, index) => (
            <tr key={deliveryMan.id} >
              <td>#{String(deliveryMan.id).padStart(2, "0")}</td>
              <td><ImageDeliveryman src={deliveryMan.avatar?.url || 'https://api.adorable.io/avatars/50/abott@adorable.png'}/></td>
              <td>{deliveryMan.name}</td>
              <td>{deliveryMan.email}</td>
              <td>{index === currentRow ? (<DropDownMenu visible={visible} entity="deliverymans" item={deliveryMan}/>) : ''}<MdMoreHoriz size={20} color="#666" onClick={() => handleMenu(index)} /></td>
            </tr>
          ))}
        </tbody>
      </TableList>
      <Pagination
            currentPage={currentPage}
            totalRecords={totalRecords}
            handleChangePage={loadDeliverieMans}
      />
    </Container>
  )
}
