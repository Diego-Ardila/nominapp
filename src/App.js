import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Axios from 'axios';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Main from "./pages/Main";

function App() {

  useEffect(() => {
   /*  Axios({
      method:"POST",
      url:"https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/877980/comments?access_token=frM5ZnpYKBwYXLR4BO7P39xR6LsNIhv8o3ESAZIo21v91IGnFCw&comment=Excelente banda, lo mejor del rock en Colombia!!",
    }).then(data => console.log(data))
      .catch(err => console.log(err)) */
  },[])

  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
