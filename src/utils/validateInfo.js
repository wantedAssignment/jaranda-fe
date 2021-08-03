import { UserStorage } from './userStorage';

const validateInfo = values => {
  const storage = new UserStorage('userData');
  const userInfo = storage.getAll();
  // const userInfo = [
  //   { id: 'marry123', password: 'marry123' },
  //   { id: 'harry123', password: 'harry123' },
  //   { id: 'garry123', password: 'garry123' },
  // ];

  let ids = userInfo.map(user => user.id);
  for (let i = 0; i < userInfo.length; i++) {
    return ids[i];
  }

  let errors = {};

  if (!values.id) {
    errors.id = '아이디를 입력해주세요.';
  } else if (values.id.length > 12 || values.id.length < 7) {
    errors.id = '아이디는 7자에서 12자 사이입니다.';
  } // localstorage id와 비교필요 -- 미완성임.
  else if (values.id !== ids[0]) {
    errors.id = '없는사용자입니다.';
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (values.password.length > 12 || values.password.length < 7) {
    errors.password = '비밀번호는 7자에서 12자 사이입니다.';
  }
  //localstorage password와 비교 필요

  return errors;
};

export default validateInfo;
