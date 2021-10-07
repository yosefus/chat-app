import './App.css';
import ChatPage from './pages/ChatPage';
import LoginForm from './pages/LoginForm';

function App() {
  return <>{!localStorage.userName ? <LoginForm /> : <ChatPage />}</>;
}

export default App;
