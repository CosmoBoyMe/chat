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
    name: 'John Wick',
    gender: 'male',
    status: 0,
    messages: {
      dialogId: 1,
      messages: [
        {
          message: 'В этой жизни нет никакого смысла. Плохие дни нет-нет да случаются.',
          isUserMessage: true,
        },
        {
          message: 'Джон Уик — не Бугимэн. Он тот, кого посылают убить грёбаного Бугимена',
          isUserMessage: true,
        },
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
          message: 'Сдам в аренду костюм доставщика еды. Посуточно.',
          isUserMessage: true,
        },
        {
          message: 'Почему-то большинство людей считает, что они хитрее моего ружья.',
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
        {
          message:
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          isUserMessage: true,
        },
        { message: 'Летающих тарелок нет, это выдумки инопланетян.', isUserMessage: false },
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
      messages: [{ message: 'Hey.', isUserMessage: true }],
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
