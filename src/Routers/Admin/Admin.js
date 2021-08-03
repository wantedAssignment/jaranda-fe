/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../../Components/Modal';
import { Table, AdminDiv } from './Admin.styles.js';

const Admin = (props) => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(FAKEDATE));
    const getLocalStorage = JSON.parse(localStorage.getItem('userData'));
    setTableData(() => getLocalStorage);

    const head = getLocalStorage[0] ? Object.keys(getLocalStorage[0]) : [];
    setColumns(head);
  }, []);

  const handleUserDelete = useCallback(() => {}, []);

  const handleUserUpdate = useCallback(
    (id) => (e) => {
      const findData = tableData.find((v) => v.id === id);
      setUpdateModal(true);
      setUpdateData(findData);
    },
    [tableData]
  );

  return (
    <AdminDiv>
      <Table>
        <thead>
          <tr>
            {columns.map((v) => {
              return <th key={v}>{v}</th>;
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((v) => {
            return (
              <tr key={v.id} onDoubleClick={handleUserUpdate(v.id)}>
                <th>{v.id}</th>
                <th>{v.name}</th>
                <th>{v.address}</th>
                <th>{v.role}</th>
                <th>{v.age}</th>
                <th>
                  {v.card.number} / {v.card.company}
                </th>
                <th>
                  <button onClick={handleUserDelete}>삭제</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {updateModal && (
        <Modal
          tableData={tableData}
          setTableData={setTableData}
          updateData={updateData}
          setUpdateModal={setUpdateModal}
        />
      )}
    </AdminDiv>
  );
};

export default Admin;

const FAKEDATE = [
  {
    id: '1',
    name: 'abab',
    address: 'busan',
    role: 'admin',
    age: 13,
    card: {
      number: 123,
      company: 'sinhan',
    },
  },
  {
    id: '2',
    name: 'dede',
    address: 'budssan',
    role: 'admin',
    age: 15,
    card: {
      number: 124,
      company: 'sinhaan',
    },
  },
  {
    id: '3',
    name: 'ffff',
    address: 'busan',
    role: 'admin',
    age: 34,
    card: {
      number: 43423,
      company: 'kb국민',
    },
  },
  {
    id: '4',
    name: 'qqq',
    address: 'busan',
    role: 'admin',
    age: 143,
    card: {
      number: 121243,
      company: 'sinhan',
    },
  },
  {
    id: '5',
    name: 'ghhhhh',
    address: 'yongin',
    role: 'admin',
    age: 43,
    card: {
      number: 15223,
      company: '하나은행',
    },
  },
];
