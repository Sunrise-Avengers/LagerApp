/*async function login(loginForm) {
  var userObj = {
    "username": loginForm.username.value,
    "password": loginForm.password.value
  };
  

  var jsonBody = JSON.stringify(userObj);

  try {
  const response = await fetch("https://api.sunrise-avengers.ch/lernende", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonBody
  });
  if(!response.ok){
    throw new Error(`Error ! status : ${response.status}`);
  }
  const data = await response.json();
    setLoginData(data);

  const preElement = document.getElementById("login-data");
  preElement.style.fontSize = "18px";
  preElement.innerHTML = JSON.stringify(data, null, 2);

  return data;
 }
  catch(error){
    console.log(error);
}

}

async function getLernende(){

try {
  const response = await fetch(
    'https://api.sunrise-avengers.ch/lernende',
    {
      method : 'GET'
    }
  );

  if(!response.ok){
    throw new Error(`Error ! status : ${response.status}`);
  }
  const data = await response.json();

  const preElement = document.getElementById("login-data");
  preElement.style.fontSize = "18px";
  preElement.innerHTML = JSON.stringify(data, null, 2);
  return data;

}catch(error){
  console.log(error)
}
}



  return (
    <form onSubmit={login}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
    </form>
  );

export { login, LoginForm };
export default LoginForm;
*/