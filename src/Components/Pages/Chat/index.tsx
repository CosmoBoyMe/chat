import './Chat.scss';
import { FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router';
import cn from 'classnames';
import { Header } from '../../organisms/Header';
import { Dialogs } from '../../organisms/Dialogs';
import { ChatHeader } from '../../organisms/ChatHeader';
import { ChatBottom } from '../../organisms/ChatBottom';
// import { Messages } from '../../organisms/Messages';
import { SCREENS } from '../../../routes/endpoints';
import { RootState } from '../../../store';
import { WebSocketContext } from '../../../Context/WebSocketProvider';
import { setSelectedDialog } from '../../../store/Slices/dialogsSlice';
import { Loader } from '../../atoms/Loader';

export const Chat: FC = () => {
  const param: { id: string | undefined } = useParams();
  const ws = useContext(WebSocketContext);
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { dialogs, selectedDialog } = useSelector((state: RootState) => state.dialogs);
  const dispatch = useDispatch();

  useEffect(() => {
    ws?.startWebSocket();

    return () => {
      ws?.closeWebSocket();
    };
  }, [ws]);

  useEffect(() => {
    if (param.id && dialogs) {
      const selectDialog = dialogs[+param.id];
      dispatch(setSelectedDialog(selectDialog));
    }
    return () => {
      dispatch(setSelectedDialog(null));
    };
  }, [dispatch, param, dialogs]);

  const isDialogSelected = param.id !== undefined;
  return (
    <>
      {!isAuth ? (
        <Redirect to={SCREENS.SCREEN_LOGIN} />
      ) : (
        <>
          <div
            className={cn('header-wrapper', {
              'header-wrapper--hidden': isDialogSelected,
            })}
          >
            <Header />
          </div>
          <main className="main">
            <div
              className={cn('main__dialogs', {
                'main__dialogs--hidden': isDialogSelected,
              })}
            >
              <Dialogs />
            </div>
            <div
              className={cn('main__chat', {
                'main__chat--hidden': param.id === undefined,
              })}
            >
              {selectedDialog && (
                <>
                  <ChatHeader status="online" name={selectedDialog.name} gender={selectedDialog.gender} />
                  <div className="main__chat-messages">{/* <Messages messages={selectedDialogs.messages} /> */}</div>
                  <ChatBottom />
                </>
              )}
              {!selectedDialog && <div className="main__select-btn">Select a chat to stary messaging</div>}
            </div>
          </main>
        </>
      )}
    </>
  );
};
