import './Chat.scss';
import { FC, useContext, useEffect } from 'react';
import { useParams, Redirect } from 'react-router';
import cn from 'classnames';
import { Header } from '../../organisms/Header';
import { Dialogs } from '../../organisms/Dialogs';
import { ChatHeader } from '../../organisms/ChatHeader';
import { ChatBottom } from '../../organisms/ChatBottom';
import { Messages } from '../../organisms/Messages';
import { SCREENS } from '../../../routes/endpoints';
import { WebSocketContext } from '../../../WebSocket/WebSocketProvider';
import { dialogsSelect, setSelectedDialogId } from '../../../store/Slices/dialogsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { messagesSelect } from '../../../store/Slices/messagesSlice';
import { authSelect } from '../../../store/Slices/authSlice';

export const Chat: FC = () => {
  const { id }: { id: string } = useParams();
  const ws = useContext(WebSocketContext);
  const isAuth = useAppSelector(authSelect.isAuth);
  const messages = useAppSelector(messagesSelect.messages);
  const { dialogs, selectedDialogId } = useAppSelector(dialogsSelect.all);
  const dispatch = useAppDispatch();

  useEffect(() => {
    ws?.startWebSocket();

    return () => {
      ws?.closeWebSocket();
    };
  }, [ws]);

  useEffect(() => {
    if (id && dialogs) {
      const selectDialogId = +id;
      dispatch(setSelectedDialogId(selectDialogId));
    }

    return () => {
      dispatch(setSelectedDialogId(null));
    };
  }, [dispatch, id, dialogs]);

  const isDialogSelected = selectedDialogId !== null;
  const selectedDialog = dialogs ? dialogs[+id] : null;

  const selectedDialogMessages = isDialogSelected ? messages[id] : null;
  return (
    <>
      {!isAuth ? (
        <Redirect to={SCREENS.SCREEN_LOGIN} />
      ) : (
        <div className="chat">
          <div
            className={cn('chat__header', {
              'chat__header--hidden': isDialogSelected,
            })}
          >
            <Header />
          </div>
          <main className="chat__main">
            <div
              className={cn('chat__dialogs', {
                'chat__dialogs--hidden': isDialogSelected,
              })}
            >
              <Dialogs />
            </div>
            <div
              className={cn('chat__chat', {
                'chat__chat--hidden': !isDialogSelected,
              })}
            >
              {selectedDialog && (
                <>
                  <ChatHeader status="online" name={selectedDialog.name} gender={selectedDialog.gender} />
                  {selectedDialogMessages && (
                    <div className="chat__chat-messages">
                      <Messages messages={selectedDialogMessages} />
                    </div>
                  )}
                  <ChatBottom />
                </>
              )}
              {!isDialogSelected && <div className="chat__select-btn">Select a chat to stary messaging</div>}
            </div>
          </main>
        </div>
      )}
    </>
  );
};
