//import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import UserList from './pages/userList';



function App() {
  const [list, setList] = useState([]); 
  
  useEffect( () => {
    fetch( '/users', {
      method : "GET",
      headers : {
        'content-type' : 'application/json',
      },
    })
    .then( res => { return res.json()})
    .then( res => { setList(res); });
    console.log('userEffect');
  },[]);

 
  const handlerUpdate = ( data ) => {
    console.log(data);
    fetch( '/api/a', {
      method : "GET",
      headers : {
        'content-type' : 'application/json',
      },
    })
    .then( res => { })
    
    
  }
  const handlerRemove = () => {}
  //const handerCreate = () => {}



  
  console.log(process.env.port);

  return (
<>123
    <UserList 
      list={list}
      onUpdate={handlerUpdate}
      onRemove={handlerRemove}
    />
</>
  );
}

export default App;
