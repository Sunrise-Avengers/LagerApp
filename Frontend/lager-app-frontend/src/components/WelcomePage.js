import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import {useHistory} from 'react-router-dom'
 
const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
 
  function Login() {
    e.preventDefault();
 
    const userObj = {
      username: username,
      password: password
    };
 
    const jsonBody = JSON.stringify(userObj);
 
 
 
    try {
      const response = await fetch("https://api.sunrise-avengers.ch/lernende", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: jsonBody
      });
 
      if (!response.ok) {
        throw new Error(`Error ! status : ${response.status}`);
      }
 
      const data = await response.json();
      console.log('Data:', data);
     
     
 
 
 
      const preElement = document.getElementById("login-data");
      preElement.style.fontSize = "18px";
      preElement.innerHTML = JSON.stringify(data, null, 2);
 
      // Do additional logic or redirect if needed
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <body>
      <form id="f_login" onSubmit={login}>
        <p>
          <label>Username:</label>

          <input className="form-controll"type="text" placeholder="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label>Password:</label>
          <input className='form-controll' type="text" placeholder='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </p>
 
        <button className='bnt btn-primary' type="submit">Login</button>
      </form>
 
      <h2>JSON Data</h2>
      <br />
      <pre id="login-data"></pre>
      <div>
        <ul>
          {}
        </ul>
      </div>
 
      <h2>Account</h2>
   
      <br />
 
      <pre id="account-data"></pre>
    </body>
  );
};
 
export default WelcomePage;
 


