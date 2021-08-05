import styled from 'styled-components';

const PaginationUI = ({ pages, onClickLeft, onClickRight, runOnClick, page }) => {
  return (
    <Container>
      <Img src="./img/arrowLeft.png" alt="arrow" onClick={onClickLeft} />
      {pages.map((el, i) => (
        <PageNumber
          el={el}
          page={page}
          onClick={() => runOnClick(el)}
          style={{ cursor: 'pointer' }}
          key={i}
        >
          {el}
        </PageNumber>
      ))}
      <Img src="./img/arrowRight.png" alt="arrow" onClick={onClickRight} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PageNumber = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 7px;
  color: ${props => (props.page === props.el ? '#ffffff' : '#8b8b8b')};
  background-color: ${props => (props.page === props.el ? '#aac14f' : '#ededed')};
`;

const Img = styled.img`
  width: 12px;
  height: 23px;
  cursor: pointer;
  margin-right: 15px;
  margin-left: 5px;
`;

export default PaginationUI;
