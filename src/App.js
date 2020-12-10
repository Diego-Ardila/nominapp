import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Axios from 'axios';
//1220261362
function App() {

  useEffect(() => {
    Axios({
      method:"POST",
      url:"https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/877980/comments?access_token=frM5ZnpYKBwYXLR4BO7P39xR6LsNIhv8o3ESAZIo21v91IGnFCw&comment=Excelente banda, lo mejor del rock en Colombia!!",
    }).then(data => console.log(data))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
