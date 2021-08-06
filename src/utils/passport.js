import { Redirect } from 'react-router-dom';

const Passport = {
  checkAdmin: user => {
    if (user?.role !== 'admin') {
      return true;
    } else {
      return false;
    }
  },
  redirectHome: () => {
    return <Redirect to="/" />;
  },
};

export default Passport;
