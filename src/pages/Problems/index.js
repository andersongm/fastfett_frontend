import React, { useEffect, useState } from 'react';
import { Container, TableList } from './styles';
import { MdMoreHoriz } from 'react-icons/md';
import api from '~/services/api';
import HeaderPage from '../../components/HeaderPage';
import DropDownMenu from '~/components/DropDownMenu';
import Modal from '~/components/Modal';

const ContentModal = ({ item }) => {
  return (
    <p>{item?.description}</p>
  );
}

export default function Problems({ location }) {

  const [problems, setProblems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const item = location.state?.item;

  useEffect(() => {
    async function loadProblems() {
      console.log('buscando problems...');
      const response = await api.get('/deliveries/problems');
      setProblems(response.data);
    }
    loadProblems();
  }, [item])

  useEffect(() => {
    if (item) {
      setVisible(false);
      setModalShow(!!item);
    }
  }, [item])

  function handleMenu(id) {
    setCurrentRow(id);
    setVisible(!visible);
  }

  return (
    <Container>
      <Modal title="Visualizar Problema"
             showModal={modalShow}
             onHide={() => setModalShow(false)}>
          <ContentModal item={item}/>
      </Modal>
      <HeaderPage title="Problemas na Entrega" />
      <TableList>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Açoes</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr key={problem.id} >
              <td>#{String(problem.delivery_id).padStart(2, "0")}</td>
              <td>{problem.description}</td>
              <td>{index === currentRow ? (<DropDownMenu visible={visible} entity="problems" item={problem} />) : ''}<MdMoreHoriz size={20} color="#666" onClick={() => handleMenu(index)} /></td>
            </tr>
          ))}
        </tbody>
      </TableList>
    </Container>
  )
}
