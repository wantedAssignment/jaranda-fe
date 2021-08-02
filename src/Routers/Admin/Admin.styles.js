import styled from 'styled-components';
export const AdminDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  width: 60%;
  font-family: 'Noto Sans KR', sans-serif;
  border-right: 2px solid #ddd;
  th,
  td {
    border-right: 2px solid #ddd;
    padding: 20px 10px;
    text-align: center;
  }

  thead {
    tr {
      background-color: #0d47a1;
      color: #ffffff;
      font-size: 20px;
    }
  }

  tbody {
    tr {
      :hover {
        background-color: dodgerblue;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  button {
    margin: 0;
    padding: 0.5rem 1rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    border: none;
    border-radius: 4px;
    display: inline-block;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;
  