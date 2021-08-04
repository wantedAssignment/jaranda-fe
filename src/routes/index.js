import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PATHS } from '../utils/constants/paths';
import Admin from '../pages/admin/Admin';
import SignInPage from '../pages/signIn';
import LogInPage from '../pages/logIn';
import SignUpContainer from '../Components/SignUp/container';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PATHS.SIGN_IN} exact component={SignInPage} />
        <Route path={PATHS.ADMIN} exact component={Admin} />
        <Route path={PATHS.LOG_IN} exact component={LogInPage} />
        <Route path={PATHS.SIGN_UP} exact compontn={SignUpContainer} />
        <Redirect from="*" to={PATHS.SIGN_IN} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
