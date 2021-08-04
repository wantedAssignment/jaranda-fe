import React, { useState } from 'react';

import useInput from '../hook/useInput';
import CardInput from '../utils/cardInput';
import Modal from '../utils/modal';
import DaumPostcode from 'react-daum-postcode';

const SignUp = ({ onSubmitUserInfo }) => {
  const [userId, setUserId] = useState('');
  const [userName, onChangeUserName] = useInput('');
  const [userAge, onChangeUserAge] = useInput(0);
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);
  const [idValidationError, setIdValidationError] = useState(false);
  const [pwdValidationError, setPwdValidationError] = useState(false);

  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [address, setAddress] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소

  const [isOpenCardNum, setIsOpenCardNum] = useState(false);
  const [bankName, onChangeBankName, setBankName] = useInput('');
  const [account, , setAccount] = useInput('');

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

  const onCompletePost = data => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
  };

  const onCompleteAccount = (bank, account) => {
    setBankName(bank);
    setAccount(account);
  };

  const onSubmitSignUp = e => {
    e.preventDefault();
    onSubmitUserInfo({
      id: userId,
      name: userName,
      password: password,
      address: addressDetail,
      role: 'user',
      age: userAge,
      card: {
        number: account,
        company: bankName,
      },
    });
  };

  return (
    <>
      <header>회원가입</header>
      <form onSubmit={onSubmitSignUp}>
        <label>
          <span>ID</span>
          <div>
            <input type="text" required defaultValue={userId} onChange={onChangeUserId} />
          </div>
        </label>
        <label>
          <span>비밀번호</span>
          <div>
            <input type="password" required defaultValue={password} onChange={onChangePassword} />
          </div>
        </label>
        <label>
          <span>비밀번호 확인</span>
          <div>
            <input
              type="password"
              required
              defaultValue={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
        </label>
        <label>
          <span>이름</span>
          <div>
            <input type="text" required defaultValue={userName} onChange={onChangeUserName} />
          </div>
        </label>
        <label>
          <span>나이</span>
          <div>
            <input
              type="range"
              min="10"
              max="60"
              required
              defaultValue={userAge}
              onChange={onChangeUserAge}
            />
            <span>{userAge}</span>
          </div>
        </label>
        <label>
          <span>주소</span>
          <div>
            <input type="text" defaultValue={address} onClick={() => setIsOpenAddress(true)} />
            <input
              type="text"
              defaultValue={addressDetail}
              onClick={() => setIsOpenAddress(true)}
            />
          </div>
        </label>
        <label>
          <span>신용카드 정보 입력</span>
          <div>
            <input
              type="text"
              defaultValue={bankName}
              onClick={() => setIsOpenCardNum(true)}
              onChange={onChangeBankName}
              required
              placeholder="은행명"
            />
            <br />
            <input
              type="text"
              defaultValue={account}
              required
              onClick={() => setIsOpenCardNum(true)}
            />
          </div>
        </label>
        <Modal open={isOpenAddress} info={<DaumPostcode autoClose onComplete={onCompletePost} />} />
        <Modal
          open={isOpenCardNum}
          close={() => setIsOpenCardNum(false)}
          info={
            <CardInput onSubmitAccountNum={onCompleteAccount} setIsOpenCardNum={setIsOpenCardNum} />
          }
        />
        {mismatchError && <h2>비밀번호가 일치하지 않습니다.</h2>}
        {pwdValidationError && <h2>비밀번호는 6자리 이상 12자리 이하이여야 합니다.</h2>}
        {idValidationError && <h2>id는 6자리 이상 12자리 이하 영어만 가능합니다.</h2>}
        {mismatchError || pwdValidationError || idValidationError ? (
          <button disabled type="submit">
            회원가입
          </button>
        ) : (
          <button type="submit">회원가입</button>
        )}
      </form>
    </>
  );
};

export default SignUp;
