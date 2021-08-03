import React, { useState, useCallback } from 'react';
import LoginForm from '../Components/LoginForm';

const LogInPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  return (
    <div>
      Hello LogInPage!
      <div className="form-container">
        {!isSubmitted ? <LoginForm submitForm={submitForm} /> : <p>로그인성공</p>}
      </div>
    </div>
  );
};

export default LogInPage;
