import React from 'react';

import { UserStorage } from '../../utils/userStorage';
import SignUp from './presenter';

const SignUpContainer = ({ history }) => {
  const onSubmitUserInfo = userInfo => {
    const userData = new UserStorage('userData');
    userData.save(userInfo);

    history.push('/');
  };

  return <SignUp onSubmitUserInfo={onSubmitUserInfo} />;
};

export default SignUpContainer;
