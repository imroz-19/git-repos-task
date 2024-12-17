import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import fetchRepoService from './api';
import './App.css';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetchRepoService();
      response.json().then(data => {
        setUserList(data);
      })
    };

    fetchUserData();

  }, []);

  return (
    <div>
    <Routes>
      <Route path='/' element={<UserList userList={userList} />}/>
      <Route path='/details/:id' element={<UserDetails userList={userList} />}/>
    </Routes>
    </div>
  );
}

export default App;
