import './Chat.scss';
import { FC } from 'react';
import { useLocation, useParams } from 'react-router';
import { Header } from '../../organisms/Header';

import { Dialogs } from '../../organisms/Dialogs';
import { ChatHeader } from '../../organisms/ChatHeader';
import { ChatBottom } from '../../organisms/ChatBottom';
import { Messages } from '../../organisms/Messages';

interface IMessage {
  message: string;
  isUserMessage: boolean;
}
interface IMessages {
  dialogId: number;
  name: string;
  gender: string;
  status: number;
  messages: { dialogId: number; messages: IMessage[] };
}

const data = [
  {
    dialogId: 1,
    name: 'Konstantin Konstantinopolski',
    gender: 'male',
    status: 0,
    messages: {
      dialogId: 1,
      messages: [
        { message: 'hey', isUserMessage: true },
        { message: 'hey', isUserMessage: true },
      ],
    },
  },
  {
    dialogId: 2,
    name: 'Marina Joe',
    gender: 'female',
    status: 3,
    messages: {
      dialogId: 2,
      messages: [
        {
          message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          isUserMessage: true,
        },
        {
          message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          isUserMessage: false,
        },
      ],
    },
  },
  {
    dialogId: 3,
    name: 'Ernest Gillroy',
    gender: 'male',
    status: 0,
    messages: {
      dialogId: 3,
      messages: [
        { message: 'hey', isUserMessage: true },
        { message: 'hey', isUserMessage: false },
      ],
    },
  },
  {
    dialogId: 4,
    name: 'Konstantin Konstantinopolski',
    gender: 'male',
    status: 10,
    messages: {
      dialogId: 4,
      messages: [{ message: 'hey', isUserMessage: true }],
    },
  },
];

export const Chat: FC = () => {
  const param: { id: string | undefined } = useParams();

  const selectedChat: IMessages | undefined = data.find(
    (item) => item.dialogId === Number(param.id),
  );
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__dialogs">
          <Dialogs data={data} />
        </div>
        <div className="main__chat">
          {selectedChat && (
            <>
              <ChatHeader status={selectedChat.status} name={selectedChat.name} />
              <div className="main__chat-messages">
                <Messages messages={selectedChat.messages} />
              </div>
              <ChatBottom />
            </>
          )}
          {!selectedChat && (
            <button type="button" className="main__chat__select-btn">
              Select a chat to stary messaging
            </button>
          )}
        </div>
      </main>
    </>
  );
};
