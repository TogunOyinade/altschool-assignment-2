import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Component/Home';
import Users from './Component/Users';
import Error from './Component/Error';
import NotFound from './Component/NotFound';

function App() {
  return (
    <Error>
      <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home />}>
            <Route path='users' element={<Users/>}/>
          </Route> 
      </Routes> 
    </Error>
  );
}

export default App;