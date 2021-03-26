import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';
import Dashboard from '../pages/dashboard/dashboard';


function AppRoutes(){



    return(
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
    )
}

export default AppRoutes;