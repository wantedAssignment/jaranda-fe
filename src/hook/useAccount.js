import { useState } from 'react';

const useAccount = initialData => {
  const [value, setValue] = useState(initialData);
  const [validError, setValidError] = useState(false);
  const handler = e => {
    setValue(e.target.value);
    setValidError(e.target.value.length === 4);
  };
  return [value, handler, setValue, validError];
};

export default useAccount;
