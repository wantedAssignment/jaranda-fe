import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  tr {
    padding: 20px 10px;
  }
  td {
    padding: 20px 10px;
  }
`;

const FAKEDATE = [
  {
    id: "1",
    name: "dydtjd",
    address: "busan",
    role: "admin",
    age: 13,
    card: {
      number: 123,
      company: "sinhan",
    },
  },
  {
    id: "2",
    name: "dydtdfajd",
    address: "budssan",
    role: "admin",
    age: 15,
    card: {
      number: 124,
      company: "sinhaan",
    },
  },
  {
    id: "3",
    name: "dydtjd",
    address: "busan",
    role: "admin",
    age: 34,
    card: {
      number: 43423,
      company: "kb국민",
    },
  },
  {
    id: "4",
    name: "dydfastjd",
    address: "busan",
    role: "admin",
    age: 143,
    card: {
      number: 121243,
      company: "sinhan",
    },
  },
  {
    id: "5",
    name: "dydtjd",
    address: "yongin",
    role: "admin",
    age: 43,
    card: {
      number: 15223,
      company: "하나은행",
    },
  },
];

const Admin = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(FAKEDATE));
    const getLocalStorage = JSON.parse(localStorage.getItem("userData"));
    setTableData(getLocalStorage);
  }, []);

  const head = tableData.length > 1 ? Object.keys(tableData[0]) : [];

  const handleUserDelete = (id) => {
    setTableData(tableData.filter((user) => user.id !== id));
  };

  const handleUserUpdate = useCallback(() => {}, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Role</th>
          <th>age</th>
          <th>card</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((v) => {
          return (
            <tr>
              <th>{v.id}</th>
              <th>{v.name}</th>
              <th>{v.address}</th>
              <th>{v.role}</th>
              <th>{v.age}</th>
              <th>{v.card.number}</th>
              <button onClick={() => handleUserDelete(v.id)}>삭제</button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Admin;
