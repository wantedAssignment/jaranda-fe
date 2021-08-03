/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ tableData, setTableData, updateData, setUpdateModal }) => {
  //   const [id, setId] = useState(null);
  //   const [name, setName] = useState(null);
  //   const [address, setAddress] = useState(null);
  //   const [role, setRole] = useState(null);
  //   const [age, setAge] = useState(null);
  //   const [card, setCard] = useState(null);
  const formRef = useRef(null);

  const handleClickSave = useCallback(() => {
    const valueArray = Array.from(formRef.current.children, a => a);
    const newTableData = [...tableData].map(v => {
      if (v.id === updateData.id) {
        const cardData = {
          number: valueArray[4].children[1].value,
          company: valueArray[5].children[1].value,
        };
        const newData = {
          id: updateData.id,
          name: valueArray[0].children[1].value,
          address: valueArray[1].children[1].value,
          role: valueArray[2].children[1].value,
          age: valueArray[3].children[1].value,
          card: cardData,
        };
        return newData;
      } else {
        return v;
      }
    });

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
            <label>Address</label>
            <input type="text" defaultValue={updateData.address} />
          </InputGroup>
          <InputGroup>
            <label>Role</label>
            <input type="text" defaultValue={updateData.role} />
          </InputGroup>
          <InputGroup>
            <label>Age</label>
            <input type="text" defaultValue={updateData.age} />
          </InputGroup>
          <InputGroup>
            <label>Card Number</label>
            <input type="text" defaultValue={updateData.card.number} />
          </InputGroup>
          <InputGroup>
            <label>Card Company</label>
            <input type="text" defaultValue={updateData.card.company} />
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
