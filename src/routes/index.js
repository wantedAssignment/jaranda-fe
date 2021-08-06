import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PATHS } from '../utils/constants/paths';
import Admin from '../pages/admin/admin';
import LogInPage from '../pages/login';
import SignUpContainer from '../pages/signup';
import Navigation from '../Components/Navigation';
import Home from '../pages/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path={PATHS.HOME} exact component={Home} />
        <Route path={PATHS.ADMIN} exact component={Admin} />
        <Route path={PATHS.LOG_IN} exact component={LogInPage} />
        <Route path={PATHS.SIGN_UP} exact component={SignUpContainer} />
        <Redirect from="*" to={PATHS.HOME} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
