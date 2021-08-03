import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PATHS } from '../utils/constants/paths';
import AdminPage from '../pages/admin';
import SignInPage from '../pages/signIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PATHS.SIGN_IN} exact component={SignInPage} />
        <Route path={PATHS.ADMIN} exact component={AdminPage} />
        <Redirect from="*" to={PATHS.SIGN_IN} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
