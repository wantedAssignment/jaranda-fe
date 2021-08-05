import React, { useState, useCallback } from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router';
import { UserStorage } from '../../utils/userStorage';

const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentUser = new UserStorage('currentUser');
  const history = useHistory();

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
    history.push({ pathname: '/' });
    window.location.reload();
  }, [setIsSubmitted, history]);

  return (
    <div>
      Hello LogInPage!
      <div>
        {!isSubmitted ? (
          <LoginForm submitForm={submitForm} />
        ) : (
          <p>로그인성공</p> && currentUser.getUser().id
        )}
      </div>
    </div>
  );
};

export default LoginPage;
