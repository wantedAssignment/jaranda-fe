/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { UserStorage } from '../../utils/userStorage';
import Modal from '../../Components/Modal';
import { Table, AdminDiv, Button, Title } from './Admin.styles.js';
import SearchBar from '../../Components/searchBar/SearchBar.js';

const Admin = props => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [store, setStore] = useState(null);
  const [searchOption, setSearchOption] = useState({ username: '' });
  const category = ['아이디', '이름', '주소', '나이', '권한', '카드'];

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(FAKEDATE));
    const storage = new UserStorage('userData');
    setStore(() => storage);

    const getLocalStorage = storage.getAll();
    const head = getLocalStorage[0] ? Object.keys(getLocalStorage[0]) : [];
    setTableData(() => getLocalStorage);
    setColumns(() => head);
  }, []);
  console.log(columns);
  const handleUserDelete = id => e => {
    const newData = tableData.filter(user => user.id !== id);
    store.replaceAll(newData);
    return setTableData(newData);
  };

  const handleUserUpdate = useCallback(
    id => e => {
      const findData = tableData.find(v => v.id === id);
      setUpdateModal(true);
      setUpdateData(findData);
    },
    [tableData],
  );

  const applySearchOptions = tableData => {
    const key = Object.keys(searchOption)[0];
    const value = searchOption[key];
    return tableData.filter(user => (value ? user[key]?.includes(value) : true));
  };

  return (
    <AdminDiv>
      <div className="admin-div">
        <Title>유저 정보 조회</Title>
        <SearchBar setSearchOption={setSearchOption} />
        <Table>
          <thead>
            <tr>
              {category.map(v => {
                return <th key={v}>{v}</th>;
              })}
              <th>&#10006;</th>
            </tr>
          </thead>
          <tbody>
            {applySearchOptions(tableData).map(v => {
              return (
                <tr key={v.id}>
                  <th>{v.id}</th>
                  <th>{v.name}</th>
                  <th>{v.address}</th>
                  <th>{v.role}</th>
                  <th>{v.age}</th>
                  <th>
                    {v.card.number} / {v.card.company}
                  </th>
                  <th>
                    <Button onClick={handleUserUpdate(v.id)} style={{ marginRight: '15px' }}>
                      수정
                    </Button>
                    <Button gray onClick={handleUserDelete(v.id)}>
                      삭제
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {updateModal && (
        <Modal
          store={store}
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
    id: 'a',
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
    id: 'b',
    name: 'dede',
    address: 'busan',
    role: 'admin',
    age: 15,
    card: {
      number: 124,
      company: 'sinhaan',
    },
  },
  {
    id: 'c',
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
    id: 'd',
    name: 'qqq',
    address: 'busan',
    role: 'admin',
    age: 43,
    card: {
      number: 121243,
      company: 'sinhan',
    },
  },
  {
    id: 'e',
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
