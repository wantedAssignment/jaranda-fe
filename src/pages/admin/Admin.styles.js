import styled from 'styled-components';

export const AdminDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .admin-div {
    width: 80%;
    text-align: center;
  }
`;

export const Table = styled.table`
  margin-top: 2%;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  border-top: 2px solid #b0b0b0;
  border-style: unset;
  background-color: #fff;
  border-collapse: collapse;
  th {
    padding: 20px 10px;
  }
  thead {
    background-color: #fafafa;
    tr {
      border-top: 1px solid #e0e0e0;
    }
    th {
    }
  }
  tbody {
    tr {
      cursor: pointer;
      :hover {
        background-color: #f5f5f5;
      }
      th {
        font-weight: unset;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
`;
export const Button = styled.button`
  border: none;
  background-color: ${({ gray }) => (gray ? '#E3E3E3' : '#AAC14F')};
  border-radius: 6px;
  padding: ${({ big }) => (big ? '12px 40px' : '10px 16px')};
  color: ${({ gray }) => (gray ? '#000' : '#fff')};
  font-size: ${({ big }) => (big ? '16px' : '14px')};
  font-family: 'Nanum Gothic', sans-serif;
  cursor: pointer;
`;
export const Input = styled.input`
  outline: none;
  border-radius: 6px;
  border: 1px solid #ababab;
  padding: 10px 20px;
  width: 100%;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif;
  &::placeholder {
    color: #b4b4b4;
    font-family: 'Nanum Gothic', sans-serif;
  }
`;
