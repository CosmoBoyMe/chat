import { createContext, FC } from 'react';
import { buildWebSocketUrl, isJson } from '../helpers/helpers';
import { useAppDispatch } from '../hooks';
import { ISelectedFile } from '../interfaces';
import { setDialogs } from '../store/Slices/dialogsSlice';
import { addMessage } from '../store/Slices/messagesSlice';

interface IDataMessage {
  senderLogin: string;
  message: string;
  dialogsId: number;
  file: ISelectedFile | null;
}

interface IWebSocket {
  sendMessage: (data: IDataMessage) => void;
  startWebSocket: () => void;
  closeWebSocket: () => void;
}

enum Types {
  usersList = 'users_list',
  message = 'message',
}

const WebSocketContext = createContext<IWebSocket | null>(null);

const WebSocketProvider: FC = ({ children }) => {
  let socket: WebSocket;

  const dispatch = useAppDispatch();
  const startWebSocket = () => {
    const connectKey = localStorage.getItem('token');
    socket = new WebSocket(buildWebSocketUrl('test', connectKey));
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
          default: {
            throw new Error(`unexpected ${type}`);
          }
        }
      }
      // сервер возвращяет ошибку строкой без типа ошибки
      const isError = !event.data.includes('type');
      if (isError) {
        alert(event.data);
      } else {
        // сервер форматирует JSON.stringify иза этого приходиться костыль делать
        const removedQuotesFromString = event.data.substring(1, event.data.length - 1);
        const { data } = JSON.parse(removedQuotesFromString);
        dispatch(addMessage(data));
      }
    };
  };
  const sendMessage = (data: IDataMessage) => {
    const stringify = JSON.stringify({ type: Types.message, data });
    socket.send(`'${stringify}'`);
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

export { WebSocketContext, WebSocketProvider };
