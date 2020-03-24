import React, { useEffect, useState} from 'react';
import { Container, TableList } from './styles';
import { MdFirstPage, MdChevronLeft, MdChevronRight, MdLastPage } from 'react-icons/md';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import api from '~/services/api';
import InitialName from '~/components/InitialName';
import PillsStatus from '~/components/PillsStatus';
import HeaderPage from '../../components/HeaderPage';
import DropDownMenu from '~/components/DropDownMenu';
import Modal from '~/components/Modal';
import { getColor } from '~/util/Util';
import Pagination from '~/components/Pagination';
import PaginationContext from '~/components/Context';

import memoize from "memoize-one"

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
    <>
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
    </>
  );

}

export default function Deliveries({ location }) {

  const [deliveries, setDeliveries] = useState([]);
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurentPage] = useState(1);
  const [itemStart, setItemStart] = useState(0);
  const [itemEnd, setItemEnd] = useState(4);

  const idDelete = location?.state?.id
  const item = location?.state?.item;
  const totalRecords = deliveries.length;

  async function loadDeliveries() {
    const response = await api.get('/deliveries');
    console.log(response.data);
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadDeliveries();

  }, [idDelete]);

  const filterDelivery = memoize((deliveries, valor) => deliveries.filter(delivery => delivery.product.match(new RegExp(valor, 'i'))));
  const filterPagination = memoize((deliveries, start, end) => deliveries.filter((_, index) => (index >= start && index <= end)));

  function fillDeliveryAll() {
    return filterPagination(deliveries.filter(d => d.id !== idDelete), itemStart, itemEnd);
  }

  function fillDeliverySearch(product) {
    return filterDelivery(deliveries.filter(d => d.id !== idDelete), product)
  }

  const deliveryAll = product ? fillDeliverySearch(product) : fillDeliveryAll();

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

  function handleSearch(product) {
    setProduct(product);
  }

  console.log('CURRENT_PAGE:', currentPage);

  // Pagination
  function nextPage() {
    if (currentPage * 5 > totalRecords) {
      return;
    }
    setCurentPage(currentPage + 1);
    setItemStart(itemEnd + 1);
    setItemEnd(itemEnd + 5);
  }

  function prevPage() {
    if (itemStart === 0) {
      setCurentPage(1);
      return;
    }
    setCurentPage(currentPage - 1);
    setItemStart(itemStart - 5);
    setItemEnd(itemEnd - 5);
  }

  function firstPage() {
    setProduct('');
    setCurentPage(1);
    setItemStart(0);
    setItemEnd(4);
  }

  function lastPage() {
    setProduct('');
    const lastPage = Math.ceil(totalRecords / 5);
    setCurentPage(lastPage);
    const start = lastPage * 5 - 5
    const end = start + 4
    setItemStart(start);
    setItemEnd(end);
  }

  return (
    <Container>
      <Modal title="Encomenda"
        showModal={modalShow}
        onHide={() => setModalShow(false)}>
        <ContentModal item={item} />
      </Modal>
      <HeaderPage
        title="Gerenciando Encomendas"
        pathButton="/deliveries/add"
        placeholderSearch="Buscar encomendas"
        onChange={e => handleSearch(e.target.value)} value={product} />

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
        {deliveryAll === undefined ? (<tbody><tr><td>Vazio</td></tr></tbody>) : (
          <tbody>
            {deliveryAll.map((delivery, index) => (
              <tr key={delivery.id} >
                <td>#{String(delivery.id).padStart(2, "0")}</td>
                <td>{delivery.deliveryman.name}</td>
                <td><InitialName letters={getLetters(delivery.recipient.name)} />{delivery.recipient.name}</td>
                <td>{delivery.recipient.city}</td>
                <td>{delivery.recipient.state}</td>
                <td><PillsStatus color={getColor(delivery.status)}>{delivery.status}</PillsStatus></td>
                <td>{index === currentRow ? (<DropDownMenu visible={visible} entity="deliveries" item={delivery} />) : ''}<MdMoreHoriz size={20} color="#666" onClick={() => handleMenu(index)} /></td>
              </tr>
            ))}
          </tbody>
        )}
      </TableList>

      {/* <Pagination>
        <button onClick={firstPage}><MdFirstPage size={24} /></button>
        <button onClick={prevPage}><MdChevronLeft size={24} /></button>
        <button onClick={nextPage}><MdChevronRight size={24} /></button>
        <button onClick={lastPage}><MdLastPage size={24} /></button>

      </Pagination> */}
      <PaginationContext.Provider value={{ nextPage, setCurentPage }}>
        <Pagination />
      </PaginationContext.Provider>

    </Container>
  )
}

Deliveries.propTypes = {
  item: PropTypes.object
}

Deliveries.defaultProps = {
  item: null,
};
