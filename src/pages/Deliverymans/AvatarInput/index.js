import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { Container } from './styles';
import { MdInsertPhoto } from 'react-icons/md';

import api from '~/services/api';

export default function AvatarInput({ name, avatar }) {
  const { fieldName, registerField, defaultValue } = useField(name);
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  async function getFile(id) {
    const { data } = await api.get(`/avatarfiles/${id}`);
    setPreview(data.url);
  }

  useEffect(() => {
    if (defaultValue) {
      getFile(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {

    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [fieldName, ref, registerField]); // eslint-disable-line

  async function handleChange(e) {

    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('avatarfiles', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || avatar || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="Avatar"
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
