import { useEffect, useMemo, useState } from 'react';
import { UserStorage } from '../../utils/userStorage';
import NavigationUI from './presenter';

const Navigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  const currentUser = useMemo(() => new UserStorage('currentUser'), []);

  useEffect(() => {
    if (currentUser.getId()) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [currentUser]);

  return <NavigationUI isLogin={isLogin} />;
};

export default Navigation;
