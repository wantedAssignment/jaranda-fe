import React from 'react';

import { UserStorage } from '../../utils/userStorage';
import SignUp from './presenter';

const SignUpContainer = ({ history }) => {
  const onSubmitUserInfo = userInfo => {
    const userData = new UserStorage('userData');
    const currentUser = new UserStorage('currentUser');

    userData.save(userInfo);
    currentUser.login(userInfo);

    history.push('/');
    window.location.reload();
  };

  return <SignUp onSubmitUserInfo={onSubmitUserInfo} />;
};

export default SignUpContainer;
