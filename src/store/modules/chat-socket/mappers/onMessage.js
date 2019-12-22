import get from 'lodash.get';
import dayjs from 'dayjs';
import { CHAT_MESSAGE_TYPES, CHAT_AVATARS } from '@/constants';

const getHumanDate = (date = '') => dayjs(date).format('DD-MM-YYYY HH:mm');

export default function (socketEvent = {}, registeredUserAvatar, registeredUserName) {
  const handleSystemMsg = (parsedData) => ({
    type: CHAT_MESSAGE_TYPES.SYSTEM,
    created: getHumanDate(get(parsedData, 'created', '')),
    text: get(parsedData, 'text', ''),
  });

  const handleUserMsg = (parsedData) => ({
    name: parsedData.name,
    created: getHumanDate(get(parsedData, 'created', '')),
    text: get(parsedData, 'text', ''),
    type: (
      parsedData.name === registeredUserName
        ? CHAT_MESSAGE_TYPES.REGISTERED_USER
        : CHAT_MESSAGE_TYPES.USER
    ),
    avatar: (
      parsedData.name === registeredUserName
        ? CHAT_AVATARS[registeredUserAvatar]
        : CHAT_AVATARS.image4
    ),
  });

  const parsedData = JSON.parse(socketEvent.data);
  const isSystemMsg = !!get(parsedData, 'name', '');

  return isSystemMsg ? handleUserMsg(parsedData) : handleSystemMsg(parsedData);
}
