import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '~/components/Avatar';
import Letters from '~/components/Letters';


export default function InitialName({ letters, avatar}) {
  return (
    <>
     {avatar ? (
       <Avatar url={avatar} />
     ) : (
       <Letters letters={letters} />
     )}
    </>
  );
}

InitialName.propTypes = {
  letters: PropTypes.string,
  avatar: PropTypes.string,
};
