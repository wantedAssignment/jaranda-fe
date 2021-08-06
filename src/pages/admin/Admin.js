/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import Passport from '../../utils/passport';
import { UserStorage } from '../../utils/userStorage';
import Modal from '../../Components/Modal.js';
import Pagination from '../../Components/Pagination';
import { Table, AdminDiv, Button, Title } from './admin.style.js';
import SearchBar from '../../Components/SearchBar';

const Admin = () => {
  const [tableData, setTableData] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [store, setStore] = useState(null);
  const [searchOption, setSearchOption] = useState({ username: '' });
  const [isRedirect, setIsRedirect] = useState(false);
  const category = ['아이디', '이름', '주소', '권한', '나이', '카드'];

  useEffect(() => {
    const storage = new UserStorage('userData');
    const loginStorage = new UserStorage('currentUser');
    const check = Passport.checkAdmin(loginStorage.getUser());
    const getLocalStorage = storage.getAll();

    if (check) {
      setIsRedirect(check);
    }
    setStore(() => storage);
    setTableData(() => getLocalStorage.slice(0, 10));
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

  const handlePageNation = id => {
    const start = (id - 1) * 10;
    const table = store.getAll();
    const pieceData = [...table].splice(start, 10);
    return setTableData(() => pieceData);
  };

  if (isRedirect) {
    return Passport.redirectHome();
  }

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
            {applySearchOptions(tableData)?.map(v => {
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
      <Pagination arr={store?.getAll()} onClick={handlePageNation} />
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
