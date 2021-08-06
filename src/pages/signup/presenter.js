import React, { useState } from 'react';

import useInput from '../../hook/useInput';
import CardInput from '../../utils/cardInput';
import Modal from '../../Components/SignupModal';
import { UserStorage } from '../../utils/userStorage';

import DaumPostcode from 'react-daum-postcode';
import {
  Form,
  Label,
  Row,
  SignUpWrapper,
  Title,
  AgeLabel,
  Input,
  AdressInputs,
  InputBox,
  Button,
  ButtonWrapper,
  ErrorMessage,
} from './index.style';

const SignUp = ({ onSubmitUserInfo }) => {
  const userData = new UserStorage('userData');

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

  const [isOverLapIdError, setIsOverLapIdError] = useState(false);

  const onChangeUserId = e => {
    const regex = /[a-zA-Z]/;
    setUserId(e.target.value);
    setIdValidationError(
      e.target.value.length < 6 || e.target.value.length > 12 || !regex.test(e.target.value),
    );
    setIsOverLapIdError(false);
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
    setIsOpenAddress(false);
  };

  const onCompleteAccount = (bank, account) => {
    setBankName(bank);
    setAccount(account);
  };

  const onSubmitSignUp = e => {
    e.preventDefault();

    const userList = userData.getAll();
    setIsOverLapIdError(() => userList.some(user => user.id === userId));

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
    <SignUpWrapper>
      <Title>회원가입</Title>
      <Form onSubmit={onSubmitSignUp}>
        <InputBox>
          <span>* 개인 정보 입력</span>
          <Row>
            <Label>아이디</Label>
            <Input
              placeholder="hello"
              type="text"
              required
              defaultValue={userId}
              onChange={onChangeUserId}
            />
          </Row>
          {idValidationError && (
            <ErrorMessage>id는 6자리 이상 12자리 이하 영어만 가능합니다.</ErrorMessage>
          )}
          {isOverLapIdError && <ErrorMessage>중복된 아이디입니다.</ErrorMessage>}
          <Row>
            <Label>이름</Label>
            <Input
              placeholder="김자란"
              type="text"
              required
              defaultValue={userName}
              onChange={onChangeUserName}
            />
          </Row>
          <Row>
            <Label>나이</Label>
            <AgeLabel>{userAge}</AgeLabel>
            <Input type="range" required defaultValue={userAge} onChange={onChangeUserAge} />
          </Row>
          <Row>
            <Label>주소</Label>
            <AdressInputs>
              <Input
                placeholder="01234"
                type="text"
                defaultValue={address}
                onClick={() => setIsOpenAddress(true)}
              />
              <Input
                type="text"
                placeholder="판교역로 13길"
                defaultValue={addressDetail}
                onClick={() => setIsOpenAddress(true)}
              />
            </AdressInputs>
          </Row>
        </InputBox>
        <InputBox>
          <Row>
            <Label>비밀번호</Label>
            <Input
              placeholder="******"
              type="password"
              required
              defaultValue={password}
              onChange={onChangePassword}
            />
          </Row>
          <Row>
            <Label>비밀번호 확인</Label>
            <Input
              placeholder="******"
              type="password"
              required
              defaultValue={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </Row>
          {mismatchError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          {pwdValidationError && (
            <ErrorMessage marginTop={true}>
              비밀번호는 6자리 이상 12자리 이하이여야 합니다.
            </ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <span>* 결제 정보 입력</span>
          <Row>
            <Label>카드사</Label>
            <Input
              type="text"
              defaultValue={bankName}
              onClick={() => setIsOpenCardNum(true)}
              onChange={onChangeBankName}
              required
              placeholder="삼성"
            />
          </Row>
          <Row>
            <Label>신용카드 정보</Label>
            <Input
              type="text"
              defaultValue={account}
              required
              placeholder="****************"
              onClick={() => setIsOpenCardNum(true)}
            />
          </Row>
        </InputBox>
        <Modal
          open={isOpenAddress}
          close={() => setIsOpenAddress(false)}
          info={<DaumPostcode onComplete={onCompletePost} />}
        />
        <Modal
          open={isOpenCardNum}
          close={() => setIsOpenCardNum(false)}
          isCardModal
          info={
            <CardInput onSubmitAccountNum={onCompleteAccount} setIsOpenCardNum={setIsOpenCardNum} />
          }
        />
        <ButtonWrapper>
          {mismatchError || pwdValidationError || idValidationError || isOverLapIdError ? (
            <Button disabled type="submit">
              확인
            </Button>
          ) : (
            <Button type="submit">확인</Button>
          )}
        </ButtonWrapper>
      </Form>
    </SignUpWrapper>
  );
};

export default SignUp;
