import axios from 'axios';

const ChatEngineApi = ({ _methhod, _data, _urlPath, _headers }) => {
  console.log(_methhod, _data, _urlPath, _headers);

  const result = axios({
    method: _methhod,
    url: `https://api.chatengine.io/${_urlPath}`,
    data: _data,
    headers: _headers,
  });

  return result;
};

export default ChatEngineApi;
