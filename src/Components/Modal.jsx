/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const Modal = ({ store, tableData, setTableData, updateData, setUpdateModal }) => {
  const [age, setAge] = useState(updateData.age);
  const formRef = useRef(null);

  const handleOnChange = useCallback(e => {
    setAge(() => e.target.value);
  }, []);

  const handleClickSave = useCallback(() => {
    const valueArray = Array.from(formRef.current.children, a => a);
    const newTableData = [...tableData].map(v => {
      if (v.id === updateData.id) {
        const newData = {
          id: updateData.id,
          name: valueArray[0].children[1].value,
          password: valueArray[1].children[1].value,
          address: valueArray[2].children[1].value,
          role: valueArray[3].children[1].value,
          age: valueArray[4].children[1].value,
          card: { ...v.card },
        };
        return newData;
      } else {
        return v;
      }
    });

    store.replaceAll(newTableData);
    setTableData(() => newTableData);
  }, []);

  const handleClickClose = useCallback(() => {
    setUpdateModal(false);
  }, []);

  if (updateData?.id) {
    return (
      <Container>
        <Form ref={formRef}>
          <InputGroup>
            <label>Name</label>
            <input type="text" defaultValue={updateData.name} />
          </InputGroup>
          <InputGroup>
            <label>Password</label>
            <input type="text" defaultValue={updateData.password} minLength={6} maxLength={12} />
          </InputGroup>
          <InputGroup>
            <label>Address</label>
            <input type="text" defaultValue={updateData.address} />
          </InputGroup>
          <InputGroup>
            <label>Role</label>
            <input type="text" defaultValue={updateData.role} />
          </InputGroup>
          <InputGroup>
            <label>Age</label>
            <input type="range" defaultValue={updateData.age} onChange={handleOnChange} />
            <span>{age}</span>
          </InputGroup>
          <BtnGroup>
            <div onClick={handleClickSave}>저장</div>
            <div onClick={handleClickClose}>닫기</div>
          </BtnGroup>
        </Form>
      </Container>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Modal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  opacity: 0.7;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  width: 300px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;
