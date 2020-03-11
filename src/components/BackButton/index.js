import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { BackButton } from './styles';

export default function BackBtn({ to }) {
  return (<BackButton to={to}><MdKeyboardArrowLeft size={14} color="#FFF" />VOLTAR</BackButton>);
}

BackBtn.propTypes = {
  to: PropTypes.string,
};

BackBtn.defaultProps = {
  to: null,
};
