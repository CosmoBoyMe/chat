import './ChatBottom.scss';
import { FC, useContext, FormEvent } from 'react';
import { WebSocketContext } from '../../../WebSocket/WebSocketProvider';
import { FileInput } from '../../atoms/FileInput';
import { SendMsgButton } from '../../atoms/SendMsgButton';
import { MessageInput } from '../../atoms/MessageInput';
import { FilePreview } from '../../atoms/FilePreview';
import { Loader } from '../../atoms/Loader';
import {
  setCurrentMessage,
  setSelectedFile,
  setFileErrorMessage,
  removeSelectedFile,
  messagesSelect,
} from '../../../store/Slices/messagesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { authSelect } from '../../../store/Slices/authSlice';
import { dialogsSelect } from '../../../store/Slices/dialogsSlice';
import { isFileValid } from '../../../helpers/helpers';

export const ChatBottom: FC = () => {
  const dispatch = useAppDispatch();
  const { currentMessage, selectedFile, fetchingFile, fileErrorMessage } = useAppSelector(messagesSelect.all);

  const userLogin = useAppSelector(authSelect.userLogin);
  const selectedDialogId = useAppSelector(dialogsSelect.selectedDialogId);
  const ws = useContext(WebSocketContext);

  const handlerOnSendMessage = () => {
    if (userLogin && selectedDialogId !== null && (currentMessage || selectedFile)) {
      const data = {
        senderLogin: userLogin,
        dialogsId: selectedDialogId,
        message: currentMessage,
        file: selectedFile,
      };
      dispatch(setCurrentMessage(''));
      dispatch(removeSelectedFile());
      ws?.sendMessage(data);
    }
  };

  const handlerOnChangeInput = (event: FormEvent<HTMLInputElement>) => {
    dispatch(setCurrentMessage(event.currentTarget.value));
  };

  const handlerOnChangeFile = (event: FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    const firstFileIndex = 0;
    const file = files ? files[firstFileIndex] : null;
    event.currentTarget.value = '';
    dispatch(removeSelectedFile());
    if (file) {
      if (isFileValid(file)) {
        dispatch(setFileErrorMessage(''));
        dispatch(setSelectedFile(file));
      } else {
        const errorMessage = 'type or size is not valid';
        dispatch(setFileErrorMessage(errorMessage));
      }
    }
  };

  return (
    <>
      <div className="chat-bottom">
        <div className="chat-bottom__controls">
          <div className="chat-bottom__file-input">
            <FileInput onChange={handlerOnChangeFile} />
          </div>
          <div className="chat-bottom__message-input">
            <MessageInput value={currentMessage} onChange={handlerOnChangeInput} />
          </div>
          <div className="chat-bottom__message-button">
            <SendMsgButton disabled={fetchingFile} onClick={handlerOnSendMessage} />
          </div>
        </div>
        {selectedFile && (
          <div className="chat-bottom__file-row">
            <FilePreview file={selectedFile} />
          </div>
        )}
        {fileErrorMessage && <p className="chat-bottom__error-text">{fileErrorMessage}</p>}
        {fetchingFile && (
          <div className="chat-bottom__file-loader">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};
