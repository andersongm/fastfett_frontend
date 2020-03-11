import React from 'react';
import PropTypes from 'prop-types';
import { MdDone } from 'react-icons/md';

import { SaveButton } from './styles';

export default function SaveBtn({ to }) {
  return (<SaveButton to={to}><MdDone size={14} color="#FFF" />SALVAR</SaveButton>);
}

SaveBtn.propTypes = {
  to: PropTypes.string,
};

SaveBtn.defaultProps = {
  to: null,
};
