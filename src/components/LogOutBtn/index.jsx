import React from 'react';

function LogOutBtn() {
  const logOut = () => {
    localStorage.removeItem('password');
    localStorage.removeItem('userName');
    window.location.reload();
  };

  return (
    <button onClick={logOut} className="logOut-button">
      Log Out
    </button>
  );
}

export default LogOutBtn;
