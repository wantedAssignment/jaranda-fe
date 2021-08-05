import React from 'react';
import { Redirect } from 'react-router-dom';
import { PATHS } from '../../utils/constants/paths';

import { UserStorage } from '../../utils/userStorage';
import SignUp from './presenter';

const SignUpContainer = () => {
  const onSubmitUserInfo = userInfo => {
    const userData = new UserStorage('userData');
    userData.save(userInfo);

    return <Redirect to={PATHS.HOME} />;
  };

  return <SignUp onSubmitUserInfo={onSubmitUserInfo} />;
};

export default SignUpContainer;
