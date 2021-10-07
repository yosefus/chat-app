import React from 'react';

function MessageForm({ message }) {
  const isThisAnImg = message?.attachments?.length > 0;

  return (
    <div>
      {isThisAnImg ? (
        <img
          src={message.attachments[0].file}
          alt="msg"
          className="message-image"
          style={{
            float: 'right',
          }}
        />
      ) : (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50' }}>
          {message.text}
        </div>
      )}
    </div>
  );
}

export default MessageForm;
