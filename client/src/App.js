import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import Driver from './components/driver/ListDriver';
import AddDriver from './components/driver/AddDriver';
import EditDriver from './components/driver/EditDriver';
import AddCar from './components/car/AddCar';
import AddCarmanufacturer from './components/carmanufacture/AddCarmanufacturer';
import EditCarmanufacturer from './components/carmanufacture/EditCarmanufacturer';
import ListCarmanufacturer from './components/carmanufacture/ListCarmanufacturer';
import ListCar from './components/car/ListCar';
import EditCar from './components/car/EditCar';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import { setCurrentUser, logoutUser } from "./actions/userAction";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from 'jwt-decode'
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  
    // Redirect to login
    window.location.href = '/login';
  }
}

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
        <NavBar/>
        <Route exact path='/SignUp' component={SignUp}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Driver' component={Driver}/>
        <Route exact path='/AddDriver' component={AddDriver}/>
        <Route exact path='/EditDriver/:id' component={EditDriver}/>
        <Route exact path='/AddCar' component={AddCar}/>
        <Route exact path='/ListCar' component={ListCar}/>
        <Route exact path='/EditCar/:id' component={EditCar}/>

        <Route exact path='/AddCarmanufacturer' component={AddCarmanufacturer}/>
        <Route exact path='/ListCarmanufacturer' component={ListCarmanufacturer}/>
        <Route exact path='/EditCarmanufacturer/:id' component={EditCarmanufacturer}/>
    
        
     </div>
    </Router>
       
    </Provider>
   
  );
}

export default App;
