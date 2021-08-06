import React, { useState, useCallback } from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
    history.push({ pathname: '/' });
    window.location.reload();
  }, [setIsSubmitted, history]);

  return (
    <div>
      <div>{!isSubmitted ? <LoginForm submitForm={submitForm} /> : <p>로그인성공</p>}</div>
    </div>
  );
};

export default LoginPage;
