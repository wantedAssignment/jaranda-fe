import { useState } from 'react';

const useAccount = initialData => {
  const regex = /[0-9]/;
  const [value, setValue] = useState(initialData);
  const [validError, setValidError] = useState(false);
  const handler = e => {
    if (regex.test(e.target.value)) {
      console.log(e.target.value);
      setValue(e.target.value);
      setValidError(e.target.value.length === 4);
    }
  };
  return [value, handler, setValue, validError];
};

export default useAccount;
