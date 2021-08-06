import { useEffect, useMemo, useState } from 'react';
import { UserStorage } from '../../utils/userStorage';
import NavigationUI from './presenter';
import Passport from '../../utils/passport';

const Navigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const currentUser = useMemo(() => new UserStorage('currentUser'), []);

  useEffect(() => {
    if (currentUser?.getUser()?.id) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

    if (Passport.checkAdmin(currentUser?.getUser())) {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
    }
  }, [currentUser]);

  const onClick = () => {
    currentUser.logout();
    setIsLogin(false);
  };

  return <NavigationUI isLogin={isLogin} isAdmin={isAdmin} onClick={onClick} />;
};

export default Navigation;
