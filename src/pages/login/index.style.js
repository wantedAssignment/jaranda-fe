import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  margin: 3em auto 0;
  min-width: 20rem;
  width: 25%;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.8rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5em auto;
  }

  label {
    min-width: 4rem;
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
  font-size: 1.1rem;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  padding: 0.8em 1em;
  border: 1px solid #ababab;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export const ErrorDiv = styled.div`
  height: 1.5rem;
  p {
    color: #d90429;
    font-weight: bold;
  }
`;

export const adminData = styled.div`
  margin-bottom: 30px;
`;
