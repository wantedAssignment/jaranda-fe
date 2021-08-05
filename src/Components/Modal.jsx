/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Button, Title } from '../pages/admin/Admin.styles';

const Modal = ({ store, tableData, setTableData, updateData, setUpdateModal }) => {
  const formRef = useRef(null);

  const handleClickSave = useCallback(() => {
    const valueArray = Array.from(formRef.current.children, a => a);
    const newTableData = [...tableData].map(v => {
      if (v.id === updateData.id) {
        console.log(valueArray);
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
        <FormContainer>
          <Title style={{ margin: '30px 0px' }}>유저 정보 관리</Title>
          <Form ref={formRef}>
            <InputGroup>
              <Label>이름</Label>
              <input type="text" defaultValue={updateData.name} />
            </InputGroup>
            <InputGroup>
              <Label>Password</Label>
              <input type="text" defaultValue={updateData.password} minLength={6} maxLength={12} />
            </InputGroup>
            <InputGroup>
              <Label>Address</Label>
              <input type="text" defaultValue={updateData.address} />
            </InputGroup>
            <InputGroup>
              <Label>권한</Label>
              <input type="text" defaultValue={updateData.role} />
            </InputGroup>
            <InputGroup>
              <Label>Age</Label>
              <input type="text" defaultValue={updateData.age} />
            </InputGroup>
            <BtnGroup>
              <Button gray onClick={handleClickClose}>
                취소
              </Button>
              <Button onClick={handleClickSave}>확인</Button>
            </BtnGroup>
          </Form>
        </FormContainer>
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
  background-color: #626262;
`;

const FormContainer = styled.div`
  text-align: center;
  background-color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 70%;
  border-radius: 10px;
  padding: 20px 20px 0px 20px;
`;

const Form = styled.div``;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  label {
    font-weight: bold;
    margin: 20px;
  }
  input {
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    margin: 5px 20px;
  }
`;

const Label = styled.label`
  width: 100px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  Button {
    margin: 25px 30px;
  }
`;
