import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../../components/ChatFeed';
import LogOutBtn from '../../components/LogOutBtn';

function ChatPage() {
  const projectId = 'fc8b8a99-eaa7-4cea-a236-c7c7b7911556';
  const privateKey = localStorage.password;
  const userName = localStorage.userName;

  return (
    <div>
      <ChatEngine height="100vh" projectID={projectId} userName={userName} userSecret={privateKey} renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />
      <LogOutBtn />
    </div>
  );
}

export default ChatPage;
