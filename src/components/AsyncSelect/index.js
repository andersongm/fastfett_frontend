import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import { asyncSelectStyles } from './styles';
import PropTypes from 'prop-types';

export default function AsyncSelectInput({ label, name, entity, selectValue, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [inputName, setInputName] = useState('');
  const [selected, setSelected] = useState(null);

  async function loadOptions(inputValue) {
    const { data } = await api.get(`/${entity}`, {
      params: {
        name: inputValue,
      },
    });

    return data.rows;
  }

  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue);
      setInputName(selectValue);
    }
  }, [defaultValue]);  // eslint-disable-line

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: selectedRef => {
        selectedRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <AsyncSelect
        id={fieldName}
        name={fieldName}
        selected={selected}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.name || option.title}
        onChange={e => setSelected(e.id)}
        defaultOptions
        onInputChange={newValue => setInputName(newValue)}
        inputValue={inputName}
        loadOptions={loadOptions}
        styles={asyncSelectStyles}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

AsyncSelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  entity: PropTypes.string,
  selectValue: PropTypes.string,
};
