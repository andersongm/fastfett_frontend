import React from 'react';
import PropTypes from 'prop-types';
import { MdAddCircle } from 'react-icons/md';

import { AddButton } from './styles';

export default function RegisterButton({ to }) {
  return (<AddButton to={to}><MdAddCircle size={16} color="#FFF" />CADASTRAR</AddButton>);
}

RegisterButton.propTypes = {
  to: PropTypes.string,
};

RegisterButton.defaultProps = {
  to: ''
};
