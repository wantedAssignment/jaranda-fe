import { UserStorage } from './userStorage';

const validateInfo = values => {
  // userstorage
  const storage = new UserStorage('userData');
  const userInfo = storage.getAll();
  // const userInfo = [
  //   { id: 'marry123', password: '12345678' },
  //   { id: 'harry123', password: '0987654' },
  //   { id: 'garry123', password: '101010101' },
  // ];

  const userId = userInfo.map(user => user.id);
  const userPassword = userInfo.map(user => user.password);

  let errors = {};

  // validate id
  if (!values.id) {
    errors.id = '아이디를 입력해주세요.';
  } else if (values.id.length > 12 || values.id.length < 7) {
    errors.id = '아이디는 7자에서 12자 사이입니다.';
  } else if (!userId.includes(values.id)) {
    errors.id = '존재하지 않는 사용자입니다.';
  }

  // validate password
  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (values.password.length > 12 || values.password.length < 7) {
    errors.password = '비밀번호는 7자에서 12자 사이입니다.';
  } else if (!userPassword.includes(values.password)) {
    errors.password = '잘못된 비밀번호입니다.';
  }

  return errors;
};

export default validateInfo;
