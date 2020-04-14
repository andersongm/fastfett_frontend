import React, {useState} from 'react';
import { Container, ContainerModal } from './styles';
import propTypes from 'prop-types';
import history from '~/services/history';
import api from '~/services/api';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import Modal from '~/components/ReactModal';

const ContentModal = ({ item }) => {
  return (
    <ContainerModal>
      <p>
        <strong>VISUALIZAR PROBLEMA</strong>
      </p>
      <p>{item && item.description}</p>
    </ContainerModal>
  );
}


export default function DropDownMenu({ visible, entity, item = [] }) {

  const [modalShow, setModalShow] = useState(false);

  function disable(entity, item) {
    switch (entity) {
      case 'deliveries':
        if (item.status !== 'PENDENTE') {
          return true;
        }
        break;
      default:
        return false;
    }
  }

  function defineSizeMenu(entity) {
    switch (entity) {
      case 'deliveries':
        return {
          width: '100px',
          right: '-30px'
        }
      case 'recipients':
        return {
          width: '100px',
          right: '-30px'
        }
      case 'deliverymans':
        return {
          width: '100px',
          right: '-30px'
        }
      case 'problems':
        return {
          width: '172px',
          right: '-65px'
        }
      default:
        return false;
    }
  }

  const size = defineSizeMenu(entity);

  function handleEdit(item) {
    history.push(`/${entity}/edit`, { item });
  }

  function handleShow(item) {

    if (entity !== 'problems') {
      history.push(`/${entity}/show`, { item });
    } else {
      setModalShow(true)
    }

  }

  function confirmExclusion(id) {

    confirmAlert({
      title: 'Confirmar Exclusão',
      message: 'Certeza que Deseja Excluir esse Registro?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {

            if (entity === 'problems') {
              api.delete(`deliveries/${entity}/${id}`);
            } else {
              api.delete(`${entity}/${id}`);
            }

            toast.success('Registro Excluído com Sucesso!');
            history.push(`/${entity}/`, { id })
          }
        },
        {
          label: 'Não',
          onClick: () => {
            return
          }
        }
      ]
    });

  }

  async function handleCancel(id) {
    try {
      const response = await api.put(`/problem/${id}/cancel-delivery`);
      const { data } = response;

      if (!data.error) {
        toast.success('Encomenda Cancelada com Sucesso!');
        history.push('/deliveries');
      } else {
        toast.error(`Erro ao cancelar Encomenda: \n ${data.error}`);
      }

    } catch (error) {
      toast.error('Erro ao cancelar Encomenda. Verifique a situação da mesma!');
    }
  }

  function getMenus(entity) {

    switch (entity) {
      case 'deliveries':
        return (
          <>
            <li><MdRemoveRedEye size={12} color="#7d40e7" /><button onClick={() => handleShow(item)}>Visualizar</button></li>
            <li><MdModeEdit size={12} color="#558aef" /><button disabled={disable(entity, item)} onClick={() => handleEdit(item)}>Editar</button></li>
            <li><MdDeleteForever size={12} color="#e25353" /><button disabled={disable(entity, item)} onClick={() => confirmExclusion(item.id)}>Excluir</button></li>
          </>
        )
      case 'problems':
        return (
          <>
            <li><MdRemoveRedEye size={12} color="#7d40e7" /><button onClick={() => handleShow(item)}>Visualizar</button></li>
            <li><MdDeleteForever size={12} color="#e25353" /><button disabled={disable(entity, item)} onClick={() => handleCancel(item.id)}>Cancelar Encomenda</button></li>
          </>
        )
      case 'recipients':
      case 'deliverymans':
        return (
          <>
            <li><MdModeEdit size={12} color="#558aef" /><button disabled={disable(entity, item)} onClick={() => handleEdit(item)}>Editar</button></li>
            <li><MdDeleteForever size={12} color="#e25353" /><button disabled={disable(entity, item)} onClick={() => confirmExclusion(item.id)}>Excluir</button></li>
          </>
        )
      default:
        break;
    }

  }

  return (
    <>
      <Modal open={modalShow} setOpen={() => setModalShow(!modalShow)}>
        <ContentModal item={item} />
      </Modal>
      <Container visible={visible} size={size}>
        <ul>
          {getMenus(entity)}
        </ul>
      </Container>
    </>
  );
}

DropDownMenu.propTypes = {
  visible: propTypes.bool,
  entity: propTypes.string,
  item: propTypes.object
};

