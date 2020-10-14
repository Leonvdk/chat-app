import React from 'react';
import './reset.css';
import Contact from './components/Contact/Contact';


const users = [
{online: true,
avatar: "https://randomuser.me/api/portraits/men/81.jpg",
name: "Hank Moody"},

{online: false,
avatar: "https://randomuser.me/api/portraits/women/91.jpg",
name: "Joanne D'Arc"},

{online: false,
avatar: "https://randomuser.me/api/portraits/men/70.jpg",
name: "Marcel El-Metwally"},
]

function App() {
  return (
    <div className="App">
      {users.map((user, index) => (
      <Contact 
        key = {index}
        online = {user.online}
        avatar = {user.avatar}
        name = {user.name}
      />))}
 
    </div>
  );
}

export default App;
