import React from 'react';

import SignUp from './signUp';

const SignUpContainer = () => {
  const onSubmitUserInfo = userInfo => {
    console.log(userInfo);
    // localStorage procedure
  };

  return <SignUp onSubmitUserInfo={onSubmitUserInfo} />;
};

export default SignUpContainer;
