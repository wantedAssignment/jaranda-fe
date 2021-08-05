import { Link } from 'react-router-dom';
import validate from './utils/validateInfo';
import useForm from './utils/useForm';

import { LoginSection, Button, Input, ErrorDiv } from './LoginPageStyles';
const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

  return (
    <LoginSection>
      <form onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <div>
          <label>아이디</label>
          <Input
            type="text"
            name="id"
            placeholder="아이디를 입력하세요"
            value={values.id}
            onChange={handleChange}
          />
        </div>
        <ErrorDiv>{errors.id && <p>{errors.id}</p>}</ErrorDiv>
        <div>
          <label>비밀번호</label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <ErrorDiv>{errors.password && <p>{errors.password}</p>}</ErrorDiv>
        <Link to="/signup">
          <div>아직 회원이 아니신가요?</div>
        </Link>
        <Button type="submit">로그인</Button>
      </form>
    </LoginSection>
  );
};

export default LoginForm;
