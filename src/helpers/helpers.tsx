import { valideFileTypes, MAX_FILE_SIZE, BASE_WEB_SOCKET_URL } from '../const';

const isJson = (string: string) => {
  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  }
  return true;
};

const isFileTypeValid = (fileType: string): boolean => valideFileTypes.includes(fileType);
const convertSizeToMb = (sizeInBytes: number): number => +(sizeInBytes / (1024 * 1024)).toFixed(1);

const isFileValid = (file: File) => {
  const { size, type } = file;
  const isValideType = isFileTypeValid(type);
  const isValideSize = size <= MAX_FILE_SIZE;
  if (isValideType && isValideSize) {
    return true;
  }
  return false;
};

const buildWebSocketUrl = (type: string, connectKey: string | null): string =>
  `${BASE_WEB_SOCKET_URL}?type=${type}&ws_id=${connectKey}`;

export { isJson, convertSizeToMb, isFileTypeValid, isFileValid, buildWebSocketUrl };
