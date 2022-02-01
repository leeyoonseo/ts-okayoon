import { IGuestbook } from '@/components/template/GuestCard/GuestCard';

// TODO: Dt Date 객체로 처리
export const dummyGuestbookData = [
  {
    guestbookId: '0',
    guestbookDt: '2022.01.26 pm 10:22',
    userId: 'okayoon',
    userNickname: '졸려라',
    message: `
      안녕하세요.<br/>
      오늘은 날씨가 좋았어요.<br/>
      아직은 겨울이지만 곧 봄이 오겠죠?
    `,
  },
  {
    guestbookId: '1',
    guestbookDt: '2022.01.26 pm 10:22',
    userId: 'cakeeee00',
    userNickname: '케이크',
    message: `
      몇일전에 왔다가 다시왔어요^^~
    `,
  },
  {
    guestbookId: '2',
    guestbookDt: '2022.01.26 pm 10:22',
    userId: 'JAM',
    userNickname: 'JAMJAM',
    message: `알로하~`,
  },
  {
    guestbookId: '3',
    guestbookDt: '2022.01.26 pm 10:22',
    userId: '030',
    userNickname: '030',
    message: `
      오늘은 목요일입니다. 알고 있었어요?<br/>
      나중에는 br에 대한 처리도 잘 해야겠죠?
    `,
  },
  {
    guestbookId: '4',
    guestbookDt: '2022.01.26 pm 10:22',
    userId: 'banana',
    userNickname: 'Banana&바나나&빠나나=원숭이',
    message: `
      긴글일때는 어떻게 되는지 생각해봐야합니다.
      물론 100자로 제한할거라서 어떨지는 모르겠지만, 그래도 일단은 긴글일때를 감안해서 만들어 봅시다!
      요즘 왕좌의게임을 보는데, 재밌어요
    `,
  },
];

export const dummyUser = {
  userId: 'okayoon',
  userImage: '',
  userNickname: '도토리',
};

export const dummyGallery = [
  {
    id: 0,
    src: '/gallery/img00.JPG',
    title: '랍스타인가 가재인가?',
    desc: `
      랍스타먹자고 해서 갔는데, 이건 랍스타인가 가재인가..?<br/>
      내가 랍스타를 안좋아하는건가 여기가 별로인 건가.<br/>
      의문이 좀 드네^^;
    `,
  },
  {
    id: 1,
    src: '/gallery/img01.JPG',
    title: '분명히...;;',
    desc: `
      분명히 어디가서 찍은 사진인데 기억이안나네<br/>
      궁금해서 사진 속성을 보니 아이폰8로 찍었다는데<br/>
      한참전이네
    `,
  },
  {
    id: 2,
    src: '/gallery/img02.JPG',
    title: '막걸리',
    desc: `
      여기는 우리동네에 있는 막걸리 집<br/>
      비가오면 대기줄이 어마어마하다.<br/>
      근데 파전이 맛있어서 가는건 아니고,<br/>
      막걸리 종류가 진짜 많다.<br/>
      지평이랑 알밤은 진짜 맛있다.
    `,
  },
  {
    id: 3,
    src: '/gallery/img03.JPG',
    title: '코로나 초창기였나?',
    desc: `
      코로나 초창기였던것 같은 기억이 있다. 뭔가 방문장부 같은것을 적었던
      기억이 있네.... 
    `,
  },
  {
    id: 4,
    src: '/gallery/img04.JPG',
    title: '인생 사진찍은 곳?',
    desc: `
      여기서 인생사진 찍어오긴 했다.
      근데 얼굴이 안나와야 인생사진인게 함정..ㅋㅋㅋ
    `,
  },
  {
    id: 5,
    src: '/gallery/img05.JPG',
    title: '지금은 없어진 곳',
    desc: `
      케이크 맛집에 커피까지 천원에 리필이었나, 그냥 리필이었나.
      하여튼 맛있었는데 없어져서 슬프다.<br/>
      곰돌이 푸는 그릇이 아니라 그림 모양 판에 가루 떨어트려서 만들어주는거다.
    `,
  },
  {
    id: 6,
    src: '/gallery/img06.JPG',
    title: '내 두번째 직장',
    desc: `
      내 두번째 직장이었다. 
      커리어적으로 나에게 큰 도움을 주진 않았던 것 같은데, 업무자체가<br/>
      좋은 팀장님을 만나서인가 기회는 많이 줬던 것 같다.<br/>
      내 자리에 가장 많은 짐이 들어선 곳이기도 하다.<br/>
      커피 내려먹기도 했었는데, ㅎㅎㅎ
    `,
  },
  {
    id: 7,
    src: '/gallery/img07.JPG',
    title: '빵은 너무 맛있다.',
    desc: '솔직히 빵은 맛있다. 밥도 맛있고, 면도,.. 다 맛있다.',
  },
  {
    id: 8,
    src: '/gallery/img08.JPG',
    title: '스테이크하우스',
    desc: '되게 비쌌던것 같은데 아닌가? 많이먹어선가..ㅋ',
  },
  {
    id: 9,
    src: '/gallery/img09.JPG',
    title: '인스타 갬성샷인가',
    desc: '초점이 이상한건 안비밀',
  },
  {
    id: 10,
    src: '/gallery/img10.JPG',
    title: '무지개떡',
    desc: '무지개떡 혼자 다 먹었다... 난 떡순이니까',
  },
  {
    id: 11,
    src: '/gallery/img11.JPG',
    title: '빵집',
    desc: '빵집가면 항상 이렇게 다 나오게 빵을 찍지만, 다시 본 적은 없다.',
  },
  {
    id: 12,
    src: '/gallery/img12.JPG',
    title: '데이트',
    desc: `
      엄마언니랑 어디간거지? 기억은 안나지만 시외 카페 어딘가 갔던것 같다.<br/>  
      빵이 맛있다고는 생각이 안들었던 곳 같은데, 그전에 먹었던곳이 너무 맛있어서<br/>
      그런 기억이었던 것 같다. 여기도 사람은 엄청 많았다.
    `,
  },
  {
    id: 13,
    src: '/gallery/img13.JPG',
    title: '감성샷',
    desc: '기억도 안나는 감성샷, 물론 찍고 sns에 올리지도 않는다.',
  },
  {
    id: 14,
    src: '/gallery/img14.JPG',
    title: '지저분하게 찍혔네..',
    desc: '지저분하게 먹은걸.. 근데 저기 맛있음..',
  },
  {
    id: 15,
    src: '/gallery/img15.JPG',
    title: '전 직장에서',
    desc: '옥상가기 전에 큰 회의실이 있는데, 점심시간에 종종와서 잠을 자고는 했다.',
  },
  {
    id: 16,
    src: '/gallery/img16.JPG',
    title: '해산물',
    desc: `
      생각보다 비싼 곳이었는데, 깔끔하게 나오기는 하나, 다시가지는 않은곳. 가성비가 없어서일까?
    `,
  },
];
