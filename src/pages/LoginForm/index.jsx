import React, { useState } from 'react';
import ChatEngineApi from '../../functions/ChatEngineApi';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');

  const projectId = 'fc8b8a99-eaa7-4cea-a236-c7c7b7911556';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = { 'Project-ID': projectId, 'User-Name': userName, 'User-Secret': password };

    try {
      await ChatEngineApi({ _urlPath: 'chats', _methhod: 'get', _headers: authObject });

      localStorage.userName = userName;
      localStorage.password = password;

      window.location.reload();
    } catch (error) {
      setUserName('');
      setPassword('');
      // event.target.reset();
      seterror('Oops , somthing went wrong! please try again');
    }
  };

  const handleChangeUserName = (event) => setUserName(event.target.value);

  const handleChangePassword = (event) => setPassword(event.target.value);

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userName} onChange={handleChangeUserName} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={handleChangePassword} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h2 className="error">{error}</h2>
      </div>
    </div>
  );
}

export default LoginForm;
