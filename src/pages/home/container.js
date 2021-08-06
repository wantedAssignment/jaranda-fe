/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HomeWrapper, Background, ButtonWrapper, Text, Button, SuperText } from './index.style';
import { UserStorage } from '../.././utils/userStorage';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const currentUser = useMemo(() => new UserStorage('currentUser'), []);

  useEffect(() => {
    const storage = new UserStorage('userData');
    storage.save({
      id: 'adminadmin',
      name: 'admin',
      password: 'adminadmin',
      address: 'adminadmin',
      role: 'admin',
      age: 25,
      card: {
        number: 123123213213,
        company: 'hana',
      },
    });

    if (currentUser?.getUser()?.id) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);
  return (
    <HomeWrapper>
      <Background></Background>
      <ButtonWrapper>
        {isLogin ? (
          <>
            <Text>로그인 페이지에서 어드민 계정을 확인하실 수 있습니다.</Text>
            <Link to="/login">
              <Button>로그인 하러 가기</Button>
            </Link>
          </>
        ) : (
          <>
            <SuperText>Welcome!</SuperText>
          </>
        )}
      </ButtonWrapper>
    </HomeWrapper>
  );
};

export default Home;
