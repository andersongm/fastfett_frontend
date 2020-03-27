import React, { useEffect, useState} from 'react';
import { Container, TableList, ContainerModal } from './styles';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import api from '~/services/api';
import InitialName from '~/components/InitialName';
import PillsStatus from '~/components/PillsStatus';
import HeaderPage from '../../components/HeaderPage';
import DropDownMenu from '~/components/DropDownMenu';
//import Modal from '~/components/Modal';
import Modal from '~/components/ReactModal';
import { getColor } from '~/util/Util';
import Pagination from '~/components/Pagination';

// import memoize from "memoize-one"

function getLetters(name) {
  if (String(name).indexOf(" ") === -1) {
    return name.substr(0, 1);
  }

  const arr = String(name).split(" ");
  return arr[0].substr(0, 1) + arr[1].substr(0, 1);
}

const ContentModal = ({ item }) => {

  if (!item) {
    return <></>
  }

  let startDate, endDate = '';

  startDate = item?.start_date !== null ? format(parseISO(item?.start_date), 'dd/MM/yyyy HH:mm:ss') : '';
  endDate = item?.end_date !== null ? format(parseISO(item?.end_date), 'dd/MM/yyyy HH:mm:ss') : '';

  return (
    <ContainerModal>
      <div>
        <p><strong>Produto:</strong> {item?.product}</p>
        <p>{item?.recipient?.street}, {item?.recipient?.number}</p>
        <p>{item?.recipient?.city}, {item.recipient?.state}</p>
        <p>{item?.recipient?.zip_code}</p>
      </div>
      <hr />
      <div>
        <p><strong>Datas</strong></p>
        <p>Retirada: {startDate}</p>
        <p>Entrega: {endDate}</p>
      </div>
      <hr />
      <div className="modal-img">
        <img src='https://api.adorable.io/avatars/50/abott@adorable.png' alt="signature" />
      </div>
    </ContainerModal>
  );

}

export default function Deliveries({ location }) {

  const [deliveries, setDeliveries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurentPage] = useState(1);

  const idDelete = location?.state?.id
  const item = location?.state?.item;

  async function loadDeliveries(page = 1) {
    const response = await api.get('/deliveries', {
      params: {
        product,
        page
      }
    });

    const { count, rows } = response.data;
    setDeliveries(rows);
    setCurentPage(page);
    setTotalRecords(count);
  }

  useEffect(() => {
    loadDeliveries();
  }, [idDelete, product]);

  // const filterDelivery = memoize((deliveries, valor) => deliveries.filter(delivery => delivery.product.match(new RegExp(valor, 'i'))));
  // const filterPagination = memoize((deliveries, start, end) => deliveries.filter((_, index) => (index >= start && index <= end)));

  // function fillDeliveryAll() {
  //   return filterPagination(deliveries.filter(d => d.id !== idDelete), itemStart, itemEnd);
  // }

  // function fillDeliverySearch(product) {
  //   return filterDelivery(deliveries.filter(d => d.id !== idDelete), product)
  // }

  // const deliveryAll = product ? fillDeliverySearch(product) : fillDeliveryAll();

  useEffect(() => {
    if (item) {
      setModalShow(true);
      setVisible(false);
    }
  }, [item])

  function handleMenu(id) {
    setCurrentRow(id);
    setVisible(!visible);
  }

  return (
    <Container>
      {/* <Modal title="Encomenda"
        showModal={modalShow}
        onHide={() => setModalShow(false)}>
        <ContentModal item={item} />
      </Modal> */}
      <Modal open={modalShow} setOpen={setModalShow}>
        <ContentModal item={item} />
      </Modal>

      <HeaderPage
        title="Gerenciando Encomendas"
        pathButton="/deliveries/add"
        placeholderSearch="Buscar Encomendas"
        onChange={e => setProduct(e.target.value)} value={product} />

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
        {deliveries === undefined ? (<tbody><tr><td>Sem Registros</td></tr></tbody>) : (
          <tbody>
            {deliveries.map((delivery, index) => (
              <tr key={delivery.id} >
                <td>#{String(delivery.id).padStart(2, "0")}</td>
                <td>{delivery.recipient.name}</td>
                <td><InitialName letters={getLetters(delivery.deliveryman.name)} avatar={delivery.deliveryman.avatar?.url}/>{delivery.deliveryman.name}</td>
                <td>{delivery.recipient.city}</td>
                <td>{delivery.recipient.state}</td>
                <td><PillsStatus color={getColor(delivery.status)}>{delivery.status}</PillsStatus></td>
                <td>{index === currentRow ? (<DropDownMenu visible={visible} entity="deliveries" item={delivery} />) : ''}<MdMoreHoriz size={20} color="#666" onClick={() => handleMenu(index)} /></td>
              </tr>
            ))}
          </tbody>
        )}
      </TableList>
      <Pagination
            currentPage={currentPage}
            totalRecords={totalRecords}
            handleChangePage={loadDeliveries}
      />
    </Container>
  )
}

Deliveries.propTypes = {
  item: PropTypes.object
}

Deliveries.defaultProps = {
  item: null,
};
