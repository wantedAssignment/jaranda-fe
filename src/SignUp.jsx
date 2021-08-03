import React, { useState, useCallback } from 'react';

import useInput from './hook/useInput';

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [userName, onChangeUserName] = useInput('');
  const [userAge, onChangeUserAge] = useInput(0);
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);
  const [idValidationError, setIdValidationError] = useState(false);
  const [pwdValidationError, setPwdValidationError] = useState(false);

  const onChangeUserId = e => {
    const regex = /[a-zA-Z]/;
    setUserId(e.target.value);
    setIdValidationError(
      e.target.value.length < 6 || e.target.value.length > 12 || !regex.test(e.target.value),
    );
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
    setMismatchError(e.target.value !== passwordCheck);
    setPwdValidationError(e.target.value.length < 6 || e.target.value.length > 12);
  };

  const onChangePasswordCheck = e => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value !== password);
    setPwdValidationError(e.target.value.length < 6 || e.target.value.length > 12);
  };

  return (
    <>
      <header>회원가입</header>
      <form>
        <label>
          <span>ID</span>
          <div>
            <input type="text" required value={userId} onChange={onChangeUserId} />
          </div>
        </label>
        <label>
          <span>비밀번호</span>
          <div>
            <input type="password" required value={password} onChange={onChangePassword} />
          </div>
        </label>
        <label>
          <span>비밀번호 확인</span>
          <div>
            <input
              type="password"
              required
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
        </label>
        <label>
          <span>이름</span>
          <div>
            <input type="text" required value={userName} onChange={onChangeUserName} />
          </div>
        </label>
        <label>
          <span>나이</span>
          <div>
            <input type="number" required value={userAge} onChange={onChangeUserAge} />
          </div>
        </label>
        <label>
          <span>주소</span>
          <div>
            <input type="text" />
          </div>
        </label>
        <label>
          <span>카드 정보</span>
          <div>
            <input type="text" required placeholder="은행명" />
            <br />
            <input type="text" required maxLength="4" />-
            <input type="password" required maxLength="4" />-
            <input type="password" required maxLength="4" />-
            <input type="text" required maxLength="4" />
          </div>
        </label>
        {mismatchError && <h2>비밀번호가 일치하지 않습니다.</h2>}
        {pwdValidationError && <h2>비밀번호는 6자리 이상 12자리 이하이여야 합니다.</h2>}
        {idValidationError && <h2>id는 6자리 이상 12자리 이하 영어만 가능합니다.</h2>}
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default SignUp;
