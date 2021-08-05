import { useState } from 'react';

const useInput = initialData => {
  const [value, setValue] = useState(initialData);
  const handler = e => {
    setValue(e.target.value);
  };
  return [value, handler, setValue];
};

export default useInput;
