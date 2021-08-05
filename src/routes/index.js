import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PATHS } from '../utils/constants/paths';
import Admin from '../pages/admin/Admin';
import SignInPage from '../pages/signIn';
import LogInPage from '../pages/login/LoginPage';
import Navigation from '../Components/navigation';
import Home from '../pages/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path={PATHS.HOME} exact component={Home} />
        <Route path={PATHS.SIGN_IN} exact component={SignInPage} />
        <Route path={PATHS.ADMIN} exact component={Admin} />
        <Route path={PATHS.LOG_IN} exact component={LogInPage} />
        <Redirect from="*" to={PATHS.HOME} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
