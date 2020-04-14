import React, { useEffect, useState, useRef } from 'react';
import InputMask from 'react-input-mask';
import { useField } from '@rocketseat/unform';

export default function Input({ name, mask, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField } = useField(name);
  const [value, setValue] = useState('');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [fieldName,registerField]);

  // }, [ref.current, fieldName,]);

  return (
    <InputMask
      id={fieldName}
      name={fieldName}
      value={value}
      ref={ref}
      onChange={e => setValue(e.target.value)}
      mask={mask}
      {...rest}
    />
  );
}
