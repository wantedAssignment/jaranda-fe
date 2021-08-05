import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validate from '../../utils/validateInfo';
import useForm from '../../utils/useForm';
import { LoginSection, Button } from './LoginPageStyles';

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

  return (
    <LoginSection>
      <form onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="id"
            placeholder="아이디를 입력하세요"
            value={values.id}
            onChange={handleChange}
          />
          {errors.id && <p>{errors.id}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <Button type="submit">로그인</Button>
      </form>
      <p>
        아직 회원이 아니신가요?
        <Link to="/signup">
          <Button>회원가입</Button>
        </Link>
      </p>
    </LoginSection>
  );
};

export default LoginForm;
