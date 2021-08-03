const validateInfo = values => {
  let errors = {};

  if (!values.id) {
    errors.id = '아이디를 입력해주세요.';
  } else if (values.id.length > 12 || values.id.length < 7) {
    errors.id = '아이디는 7자에서 12자 사이입니다.';
  }
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = 'Email address is invalid';
  // }

  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (values.password.length > 12 || values.password.length < 7) {
    errors.password = '비밀번호는 7자에서 12자 사이입니다.';
  }

  //localstorage password와 비교 필요
  // else if (values.password2 !== values.password) {
  //   errors.password2 = 'Passwords do not match';
  // }
  return errors;
};

export default validateInfo;
