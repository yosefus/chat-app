import React from 'react';

function TheirMessage({ message, lastMessage }) {
  const isFirstMsgByTheUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  const isThisAnImg = message?.attachments?.length > 0;

  console.log(message?.sender?.avatar);
  return (
    <div className="message-row">
      {isFirstMsgByTheUser && <div className="message-avatar" style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />}

      {isThisAnImg ? (
        <img src={message.attachments[0].file} alt="msg" className="message-image" style={{ marginLeft: isFirstMsgByTheUser ? '4px' : '48px' }} />
      ) : (
        <div className="message" style={{ float: 'left', backgroundColor: '#cabcdc', marginLeft: isFirstMsgByTheUser ? '4px' : '48px' }}>
          {message.text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;
