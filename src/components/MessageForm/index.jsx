import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

function MyMessage(props) {
  const [inputState, setInputState] = useState('');
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = inputState.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    event.target.reset();
  };

  const handleChange = (event) => {
    setInputState(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input onChange={handleChange} onSubmit={handleSubmit} placeholder="send a message..." type="text" className="message-input" />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input multiple={false} type="file" onChange={handleUpload} id="upload-button" style={{ display: 'none' }} />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
}

export default MyMessage;
