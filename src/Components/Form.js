import React, { useState, useCallback } from 'react';
import LoginForm from './LoginForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  return (
    <>
      <div className="form-container">
        {!isSubmitted ? <LoginForm submitForm={submitForm} /> : <p>로그인성공</p>}
      </div>
    </>
  );
};

export default Form;
