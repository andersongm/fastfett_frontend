import React from 'react';
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
