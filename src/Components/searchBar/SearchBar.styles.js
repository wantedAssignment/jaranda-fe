import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  label {
  }
  select {
    width: 75px;
    border: 1px solid #c4c4c4;
    padding: 13px 5px;
    border-radius: 5px;
    color: #7a7a7a;
    font-weight: bold;
    text-align-last: center;
    option {
      border: 1px solid #c4c4c4;
      text-align-last: center;
    }
  }
  input {
    margin-left: 10px;
    border: 1px solid #c4c4c4;
    padding: 13px 40px 15px 15px;
    border-radius: 5px;
  }
  button {
    margin-left: 10px;
    padding: 10px 15px;
    background-color: #7a7a7a;
    color: #fff;
    border: 2.5px solid #7a7a7a;
    border-radius: 7px;
    cursor: pointer;
  }
`;
