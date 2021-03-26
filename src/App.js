import { useEffect } from 'react';
import { useAppContext } from './store/context';

import AppRoutes from './routes/approutes';


function App() {
  const { state, dispatch, brandname } = useAppContext();
  

  useEffect(() => {
    dispatch({type:'stoploading'})
  },[])

  return (
    <div className="App">
      { state.apploading && <h4>application loading ....</h4> }
      { state.initializeapp && 
        <AppRoutes />   
      }
    </div>
  );
}

export default App;
