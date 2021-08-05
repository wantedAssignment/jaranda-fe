import styled from 'styled-components';

export const LoginSection = styled.section`
  text-align: center;
  margin: 3em auto 0;
  width: 50%;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  div {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 0.5em;
  }

  label {
    font-size: 1.1rem;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0.5em 1em;
  border-radius: 6px;
  background-color: #aac14f;
  display: block;
  margin: 0 auto;
  color: #ffffff;
  font-size: 20px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 1em;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;
`;

export const ErrorDiv = styled.div`
  height: 1.5rem;
`;
