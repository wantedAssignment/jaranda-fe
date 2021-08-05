import React from 'react';
import styled from 'styled-components';

import useInput from '../hook/useInput';
import useAccount from '../hook/useAccount';

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const Label = styled.label`
  width: 110px;
  text-align: right;
  margin-right: 20px;
`;

const Input = styled.input`
  flex: 1;
  width: 10px;
  outline: none;
  border-radius: 6px;
  border: 1px solid #ababab;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif;
  &::placeholder {
    color: #b4b4b4;
    font-family: 'Nanum Gothic', sans-serif;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background-color: #aac14f;
  font-family: 'Nanum Gothic', sans-serif;
  color: #fff;
  font-size: 16px;
  padding: 15px 45px;
  border-radius: 6px;
`;

const ErrorMessage = styled.h3`
  margin-left: 130px;
  font-size: 12px;
  font-weight: bold;
  color: #e54f4f;
  margin-top: ${({ marginTop }) => (marginTop ? '5px' : 0)};
`;

const CardInput = ({ onSubmitAccountNum, setIsOpenCardNum }) => {
  const [bankName, onChangeBankName] = useInput('');
  const [accountNum1st, onChangeAccountNum1st, , validError1st] = useAccount('');
  const [accountNum2nd, onChangeAccountNum2nd, , validError2nd] = useAccount('');
  const [accountNum3rd, onChangeAccountNum3rd, , validError3rd] = useAccount('');
  const [accountNum4th, onChangeAccountNum4th, , validError4th] = useAccount('');

  const onSubmitAccount = e => {
    e.preventDefault();
    const accountFullNum = accountNum1st + accountNum2nd + accountNum3rd + accountNum4th;
    onSubmitAccountNum(bankName, accountFullNum);
    setIsOpenCardNum(false);
  };

  return (
    <>
      <Title>신용카드 정보 입력</Title>
      <Row>
        <Label>카드사</Label>
        <Input
          type="text"
          placeholder="은행이름"
          defaultValue={bankName}
          onChange={onChangeBankName}
          required
        />
      </Row>
      <Row>
        <Label>카드번호</Label>
        <Input type="number" defaultValue={accountNum1st} onChange={onChangeAccountNum1st} />
        <Input type="number" defaultValue={accountNum2nd} onChange={onChangeAccountNum2nd} />
        <Input type="number" defaultValue={accountNum3rd} onChange={onChangeAccountNum3rd} />
        <Input type="number" defaultValue={accountNum4th} onChange={onChangeAccountNum4th} />
      </Row>
      {validError1st && validError2nd && validError3rd && validError4th ? (
        <ButtonWrapper>
          <Button type="button" onClick={onSubmitAccount}>
            확인
          </Button>
        </ButtonWrapper>
      ) : (
        <>
          <ErrorMessage>계좌번호를 확인해주세요.</ErrorMessage>
          <ButtonWrapper>
            <Button disabled type="button">
              확인
            </Button>
          </ButtonWrapper>
        </>
      )}
    </>
  );
};

export default CardInput;
