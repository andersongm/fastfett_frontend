import React from 'react';
import PropTypes from 'prop-types';
import { AvatarImage } from './styles';

export default function Avatar({url}) {
  return (
    <AvatarImage src={url} alt="Avatar" />
  );
}


Avatar.propTypes = {
  url: PropTypes.string
};
