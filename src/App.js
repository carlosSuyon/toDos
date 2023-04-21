import './App.css';
//componentes hijos ....
import React from 'react';
// import ProfileUser from './profileUser/ProfileUser';

// import Login from './login/Login';
import Posts from './posts/Posts'
import Ejemplo from './ejemplo/Ejemplo';
// DATOS MOCK
// logic a data
const userLogin = {
  id:1,
  firstName:"Terry",
  lastName: "Medhurst",
  email: "atuny0@sohu.com",
  phone: "+63 791 675 8914",
  username: "atuny0",
  birthDate: "2000-12-25",
  image: "https://robohash.org/hicveldicta.png"
}

// const post = {
//   "id": 1,
//   "title": "His mother had always taught him",
//   "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//   "userId": 9,
//   "tags": [
//     "history",
//     "american",
//     "crime"
//   ],
//   "reactions": 2
// }

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <ProfileUser user={userLogin}></ProfileUser> */}
      <Posts></Posts> 
      {/* <Ejemplo></Ejemplo> */}
    </div>
  );
}

export default App;
