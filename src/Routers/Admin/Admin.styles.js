import styled from 'styled-components';
export const AdminDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  margin-top: 10vh;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  border-right: 2px solid #ddd;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  th,
  td {
    border-right: 2px solid #ddd;
    padding: 20px 10px;
    text-align: center;
  }

  thead {
    tr {
      background-color: #aac14f;
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
    }
  }

  tbody {
    tr {
      transition: border-size 0.3s ease-in-ease-out;
      border-color: #aac14f;
      :hover {
        cursor: pointer;
        border: 1px solid #aac14f;
      }
    }
  }

  button {
    margin: 0;
    padding: 0.5rem 1rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    display: inline-block;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
      background-color: #aac14f;
    }
  }
`;
