import React, { useState, useCallback } from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router';
import { UserStorage } from '../../utils/userStorage';

const LoginPage = () => {
  // localStorage.setItem(
  //   'userData',
  //   JSON.stringify([
  //     {
  //       id: 'harry123',
  //       password: 'harry123',
  //       name: 'abab',
  //       address: 'busan',
  //       role: 'admin',
  //       age: 13,
  //       card: {
  //         number: 123,
  //         company: 'sinhan',
  //       },
  //     },
  //     {
  //       id: 'marry123',
  //       password: 'marry123',
  //       name: 'abab',
  //       address: 'busan',
  //       role: 'admin',
  //       age: 13,
  //       card: {
  //         number: 123,
  //         company: 'sinhan',
  //       },
  //     },
  //   ]),
  // );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentUser = new UserStorage('currentUser');
  const history = useHistory();

  const submitForm = useCallback(() => {
    setIsSubmitted(true);
    history.push({ pathname: '/' });
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
