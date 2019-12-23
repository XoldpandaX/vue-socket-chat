import image1 from '@/assets/images/avatar1.jpg';
import image2 from '@/assets/images/avatar2.png';
import image3 from '@/assets/images/avatar3.jpg';
import image4 from '@/assets/images/avatar4.jpg';
import image5 from '@/assets/images/avatar5.jpeg';

export const CHAT_AVATARS = {
  image1,
  image2,
  image3,
  image4,
  image5,
};

export const CHAT_MESSAGE_TYPES = {
  SYSTEM: 'system',
  USER: 'user',
  REGISTERED_USER: 'registered',
};

export const SOCKET_ENDPOINT = 'ws://pm.tada.team/ws';

export const ROUTES = {
  HOME: {
    PATH: '/',
    NAME: 'home',
  },
  CHAT: {
    PATH: '/chat',
    NAME: 'chat',
  },
};
