import { PATHS } from '../../utils/constants/paths';
import { Link } from 'react-router-dom';

const NavigationUI = ({ isLogin, onClick }) => {
  return (
    <div style={{ paddingLeft: 200, width: 300, display: 'flex', justifyContent: 'space-between' }}>
      <Link to={PATHS.HOME}>
        <span>Home</span>
      </Link>
      <Link to={PATHS.ADMIN}>
        <span>관리자</span>
      </Link>
      {!isLogin && (
        <Link to={PATHS.LOG_IN}>
          <span>로그인</span>
        </Link>
      )}
      {!isLogin && (
        <Link to={PATHS.SIGN_IN}>
          <span>회원가입</span>
        </Link>
      )}
      {isLogin && (
        <Link to={PATHS.LOG_IN}>
          <span onClick={onClick}>로그아웃</span>
        </Link>
      )}
    </div>
  );
};

export default NavigationUI;
