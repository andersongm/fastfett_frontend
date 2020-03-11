import React from 'react';
import { Container } from './styles';
import history from '~/services/history';
import { MdRemoveRedEye, MdModeEdit, MdDeleteForever } from 'react-icons/md';

export default function DropDownMenu({ position, visible, item = [] }) {

  function handleEdit(id) {
    history.push("/deliveries/"+id);
  }

  return (<Container visible={visible} position={position}>
    <ul>
      <li><MdRemoveRedEye size={12} color="#7d40e7"/><button>Visualizar</button></li>
      <li><MdModeEdit size={12} color="#558aef"/><button>Editar</button></li>
      <li><MdDeleteForever size={12} color="#e25353"/><button>Visualizar</button></li>
    </ul>
  </Container>);
}
