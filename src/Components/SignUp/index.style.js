import styled from 'styled-components';

export const SignUpWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Form = styled.form``;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const Label = styled.label`
  width: 110px;
  text-align: right;
  margin-right: 20px;
`;

export const AgeLabel = styled.span`
  border: 1px solid #aac14f;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif;
  margin-right: 10px;
`;

export const AdressInputs = styled.div`
  display: flex;
  > input {
    &:first-child {
      width: 100px;
      margin-right: 10px;
    }
  }
`;

export const InputBox = styled.div`
  margin-bottom: 50px;
  > span {
    color: #e54f4f;
    font-size: 11px;
    text-align: right;
    display: block;
  }
`;

export const Input = styled.input`
  flex: 1;
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

export const Button = styled.button`
  border: none;
  background-color: #aac14f;
  font-family: 'Nanum Gothic', sans-serif;
  color: #fff;
  font-size: 16px;
  padding: 15px 45px;
  border-radius: 6px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

export const ErrorMessage = styled.h3`
  margin-left: 130px;
  font-size: 12px;
  font-weight: bold;
  color: #e54f4f;
  margin-top: ${({ marginTop }) => (marginTop ? '5px' : 0)};
`;
