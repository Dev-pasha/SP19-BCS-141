import './App.css';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
// import Header from './components/header/header';
import Header from "./components/header/header.jsx"
import Login from './components/login/login';
import Home from './components/Home/home';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from './Actions/user';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
   
  useEffect(() => {
   dispatch(LoadUser());
  }, [])

  const {isAuthenticated} = useSelector(state => state.user);
  
  return (
    <Router>
      {isAuthenticated && <Header/>}
        {/* <Header/> */}
        <Routes>
          {/* <Home/> */}
          {/* <Route path='/' element={<Login/>}/> */}
          {/* <Route path='/home' element={<Home/>}/> */}
          <Route path='/' element={isAuthenticated ? <Home/> : <Login/>}/>

        </Routes>
    </Router>
  );
}

export default App;
