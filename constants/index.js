export const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.okayoon.com'
    : 'http://localhost:3065';
export const bucketUrl =
  'https://okayoon-bucket.s3.ap-northeast-2.amazonaws.com';

export const avatars = [
  {
    name: 'bear',
    path: '/avatar/avatar_bear.png',
  },
  {
    name: 'bear-winter',
    path: '/avatar/avatar_bear_winter.png',
  },
  {
    name: 'beetle',
    path: '/avatar/avatar_beetle.png',
  },
  {
    name: 'bird',
    path: '/avatar/avatar_bird.png',
  },
  {
    name: 'cat',
    path: '/avatar/avatar_cat.png',
  },
  {
    name: 'ducky',
    path: '/avatar/avatar_ducky.png',
  },
  {
    name: 'elephant',
    path: '/avatar/avatar_elephant.png',
  },
  {
    name: 'fox',
    path: '/avatar/avatar_fox.png',
  },
  {
    name: 'hedgehog',
    path: '/avatar/avatar_hedgehog.png',
  },
  {
    name: 'monkey',
    path: '/avatar/avatar_monkey.png',
  },
  {
    name: 'octopus',
    path: '/avatar/avatar_octopus.png',
  },
  {
    name: 'pig',
    path: '/avatar/avatar_pig.png',
  },
  {
    name: 'puffer-fish',
    path: '/avatar/avatar_puffer-fish1.png',
  },
  {
    name: 'sheep',
    path: '/avatar/avatar_sheep.png',
  },
  {
    name: 'bunny',
    path: '/avatar/avatar_sleeping_bunny.png',
  },
];
