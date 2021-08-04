/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import Passport from '../../utils/passport';
import { UserStorage } from '../../utils/userStorage';
import Modal from '../../Components/Modal';
import { Table, AdminDiv } from './Admin.styles.js';
import SearchBar from '../../Components/admin/SearchBar';
import Pagination from '../../Components/pagination';

const Admin = () => {
  const [tableData, setTableData] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [store, setStore] = useState(null);
  const [searchOption, setSearchOption] = useState({ username: '' });
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(FAKEDATE));
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        id: 'lsa3163',
        name: '이승욱',
        password: '13131313',
        address: '수지',
        role: 'admin',
        age: 25,
        card: {
          number: 123123213213,
          company: 'hana',
        },
      }),
    );
    const storage = new UserStorage('userData');
    const loginStorage = new UserStorage('currentUser');
    const check = Passport.checkAdmin(loginStorage.getUser());
    const getLocalStorage = storage.getAll();

    if (check) {
      setIsRedirect(check);
    }
    setStore(() => storage);
    setTableData(() => getLocalStorage);
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
    return tableData && tableData.filter(user => (value ? user[key]?.includes(value) : true));
  };

  if (isRedirect) {
    return Passport.redirectHome();
  }

  return (
    <AdminDiv>
      <SearchBar setSearchOption={setSearchOption} />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
            <th>Address</th>
            <th>Role</th>
            <th>Age</th>
            <th>&#10006;</th>
          </tr>
        </thead>
        <tbody>
          {applySearchOptions(tableData)?.map(v => {
            return (
              <tr key={v.id}>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.id}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.name}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.password}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.address}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.role}</th>
                <th onDoubleClick={handleUserUpdate(v.id)}>{v.age}</th>
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
    password: '123',
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
    password: '123',
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
    password: '123',
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
    password: '123',
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
    password: '123',
    address: 'yongin',
    role: 'admin',
    age: 43,
    card: {
      number: 15223,
      company: '하나은행',
    },
  },
];
