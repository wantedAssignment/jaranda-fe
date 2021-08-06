import React from 'react';
import { Link } from 'react-router-dom';
import { HomeWrapper, Background, ButtonWrapper, Text, Button } from './index.style';

const Home = () => {
  return (
    <HomeWrapper>
      <Background></Background>
      <ButtonWrapper>
        <Text>로그인 페이지에서 어드민 계정을 확인하실 수 있습니다.</Text>
        <Link to="/login">
          <Button>로그인 하러 가기</Button>
        </Link>
      </ButtonWrapper>
    </HomeWrapper>
  );
};

export default Home;
