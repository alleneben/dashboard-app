import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Dashboard from './pages/dashboard/dashboard';

import { useAppContext } from './store/context';



function App() {
  const {state, dispatch} = useAppContext();
  
  console.log(state);

  useEffect(() => {
    dispatch({type:'stoploading'})
  },[])


  return (
    <div className="App">
      { state.apploading && <h4>application loading ....</h4> }
      { state.initializeapp &&
      
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      
      }
    </div>
  );
}

export default App;
