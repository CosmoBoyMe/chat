import { createContext, FC } from 'react';
import { useDispatch } from 'react-redux';
import { isJson } from '../helpers/helpers';
import { setDialogs } from '../store/Slices/dialogsSlice';
import { addMessage } from '../store/Slices/messagesSlice';

interface IWebSocket {
  sendMessage: (data: string) => void;
  startWebSocket: () => void;
  closeWebSocket: () => void;
}

enum Types {
  usersList = 'users_list',
  message = 'message',
}

export const WebSocketContext = createContext<IWebSocket | null>(null);

export const WebSocketProvider: FC = ({ children }) => {
  let socket: WebSocket;

  const dispatch = useDispatch();

  const sendMessage = (data: string) => {
    const payload = JSON.stringify({ type: Types.message, data });
    socket.send(payload);
  };

  const startWebSocket = () => {
    const connectKey = localStorage.getItem('token');
    socket = new WebSocket(`ws://109.194.37.212:2346/?type=test&ws_id=${connectKey}`);
    socket.onopen = () => {
      const data = { type: Types.usersList };
      socket.send(JSON.stringify(data));
    };

    socket.onmessage = (event) => {
      if (isJson(event.data)) {
        const { type, data } = JSON.parse(event.data);
        switch (type) {
          case Types.usersList: {
            dispatch(setDialogs(data));
            return;
          }
          case Types.message: {
            dispatch(addMessage(data));
            return;
          }
          default: {
            throw new Error(`unexpected type ${type}`);
          }
        }
      } else {
        alert(event.data);
      }
    };
  };
  const closeWebSocket = () => {
    socket.close();
  };
  const ws = {
    sendMessage,
    startWebSocket,
    closeWebSocket,
  };

  return <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>;
};
