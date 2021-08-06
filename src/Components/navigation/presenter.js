import { PATHS } from '../../utils/constants/paths';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavWrapper, StyledLink } from './index.style';

const NavigationUI = ({ isLogin, onClick }) => {
  const [currentPath, setCurrentPath] = useState(PATHS.HOME);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setCurrentPath(location.pathname);
    }
  }, [location.pathname, currentPath]);

  return (
    <NavWrapper>
      <StyledLink
        to={PATHS.HOME}
        onClick={() => setCurrentPath(PATHS.HOME)}
        active={PATHS.HOME === currentPath}
      >
        <span>홈</span>
      </StyledLink>
      <StyledLink
        to={PATHS.ADMIN}
        onClick={() => setCurrentPath(PATHS.ADMIN)}
        active={PATHS.ADMIN === currentPath}
      >
        <span>관리자</span>
      </StyledLink>
      {!isLogin && (
        <StyledLink
          to={PATHS.LOG_IN}
          onClick={() => setCurrentPath(PATHS.LOG_IN)}
          active={PATHS.LOG_IN === currentPath}
        >
          <span>로그인</span>
        </StyledLink>
      )}
      {!isLogin && (
        <StyledLink
          to={PATHS.SIGN_UP}
          onClick={() => setCurrentPath(PATHS.SIGN_UP)}
          active={PATHS.SIGN_UP === currentPath}
        >
          <span>회원가입</span>
        </StyledLink>
      )}
      {isLogin && (
        <StyledLink
          to={PATHS.LOG_IN}
          onClick={() => setCurrentPath(PATHS.LOG_IN)}
          active={PATHS.LOG_IN === currentPath}
        >
          <span onClick={onClick}>로그아웃</span>
        </StyledLink>
      )}
    </NavWrapper>
  );
};

export default NavigationUI;
