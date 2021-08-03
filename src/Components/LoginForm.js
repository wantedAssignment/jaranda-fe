import React from 'react';
import validate from '../utils/validateInfo';
import useForm from '../utils/useForm';

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

  return (
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
