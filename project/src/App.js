import './App.css';
import React, { useState, useEffect } from 'react';
import User from './User.js';
import Modal from './Modal.js';

function App() {
  const usersApi = "https://jsonplaceholder.typicode.com/users"
  const albumsApi = " https://jsonplaceholder.typicode.com/albums?userId="
  const [users, setUsers] = useState([])
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      fetch(usersApi)
        .then(res => res.json())
        .then(json => setUsers(json))
    }
    fetchUsers()
  }, []);
  const getAlbums = (id) => {
    const apiLink = albumsApi + id
    fetch(apiLink)
        .then(res => res.json())
        .then(json => setAlbums(json))
  }
  return (
    <div className="App">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">phone</th>
            <th scope="col">website</th>
            <th scope="col">company</th>
            <th scope="col">albums</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User user={user} index={index} getAlbums={getAlbums}/>
          ))}
        </tbody>
      </table>
      <Modal albums={albums}/>
    </div>
  );
}

export default App;
