/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { UserStorage } from '../../utils/userStorage';
import Modal from '../../Components/Modal';
import { Table, AdminDiv } from './Admin.styles.js';
import SearchBar from '../../Components/admin/SearchBar';
import Pagination from '../../Components/pagination';

const Admin = props => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [store, setStore] = useState(null);
  const [searchOption, setSearchOption] = useState({ username: '' });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(FAKEDATE));
    const storage = new UserStorage('userData');
    setStore(() => storage);

    const getLocalStorage = storage.getAll();
    const head = getLocalStorage[0] ? Object.keys(getLocalStorage[0]) : [];
    setTableData(() => getLocalStorage);
    setColumns(() => head);
  }, []);

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
      <SearchBar setSearchOption={setSearchOption} />
      <Table>
        <thead>
          <tr>
            {columns.map(v => {
              return <th key={v}>{v}</th>;
            })}
            <th>&#10006;</th>
          </tr>
        </thead>
        <tbody>
          {applySearchOptions(tableData).map(v => {
            return (
              <tr key={v.id}>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.id}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.name}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.address}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.role}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.age}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>
                  {v.card.number} / {v.card.company}
                </th>
                <th>
                  <button onClick={handleUserDelete(v.id)}>삭제</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination arr={tableData} />
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
