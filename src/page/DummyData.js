const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const dummyData = [
  {
    id: 1,
    title: '게시글 제목',
    likes: 0,
    answers: 0,
    views: 2,
    body: '게시글 내용',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'Heera',
      reputation: 3, // 평판
      createdAt: 'asked 46 secs ago',
    },
  },
  {
    id: 2,
    title: '넘무힘드러..',
    likes: 2,
    answers: 10,
    views: 56,
    body: '오랜만에 글을 작성해 보는데 말이죠... 이거는 정말,.. 제가 할 수 있는 일인가에 대한걸 다시 고민해봐야 할 시점인것 같습니다만.. 얼마나 길게 쓴게 잘려서 나올지 한번 테스트 해보도록 하겠습니다.. 이정도면 엄청 길게 쓴게 아닐까요?? 정말 고민이 많이 됩니다.. 이게 한꺼번에 다 나오지 않아야 할텐데 말이죠...',
    tag: ['java', 'javascript', 'python'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'seoyeon',
      reputation: 1801, // 평판
      createdAt: 'asked 46 secs ago',
    },
  },
  {
    id: 3,
    title: '세번째 글입니다만...',
    likes: 34,
    answers: 668,
    views: 23234,
    body: '안녕하세요 제 질문은요/..',
    tag: ['java', 'logic', 'nameerror', 'firebase-authentication'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'kim.s.y',
      reputation: 235, // 평판
      createdAt: 'asked 5 mins ago',
    },
  },
  {
    id: 4,
    title: '글을적어보쟈',
    likes: 2,
    answers: 8,
    views: 45,
    body: '내용이랄게 없지만서도 적으면 또 적을수도 있는데,.. 데체 긴 내용은 어떻게 길이를 줄일까요',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'harnry',
      reputation: 3, // 평판
      createdAt: 'asked 7 mins ago',
    },
  },
  {
    id: 5,
    title: '글을적어보쟈',
    likes: 2,
    answers: 8,
    views: 45,
    body: '내용이랄게 없지만서도 적으면 또 적을수도 있는데,.. 데체 긴 내용은 어떻게 길이를 줄일까요',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'harnry',
      reputation: 3, // 평판
      createdAt: 'asked 7 mins ago',
    },
  },
  {
    id: 6,
    title: '글을적어보쟈',
    likes: 2,
    answers: 8,
    views: 45,
    body: '내용이랄게 없지만서도 적으면 또 적을수도 있는데,.. 데체 긴 내용은 어떻게 길이를 줄일까요',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'harnry',
      reputation: 3, // 평판
      createdAt: 'asked 7 mins ago',
    },
  },
  {
    id: 7,
    title: '글을적어보쟈',
    likes: 2,
    answers: 8,
    views: 45,
    body: '내용이랄게 없지만서도 적으면 또 적을수도 있는데,.. 데체 긴 내용은 어떻게 길이를 줄일까요',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'harnry',
      reputation: 3, // 평판
      createdAt: 'asked 7 mins ago',
    },
  },
  {
    id: 8,
    title: '글을적어보쟈',
    likes: 2,
    answers: 8,
    views: 45,
    body: '내용이랄게 없지만서도 적으면 또 적을수도 있는데,.. 데체 긴 내용은 어떻게 길이를 줄일까요',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'harnry',
      reputation: 3, // 평판
      createdAt: 'asked 7 mins ago',
    },
  },
  {
    id: 9,
    title: '글을적어보쟈',
    likes: 2,
    answers: 8,
    views: 45,
    body: '내용이랄게 없지만서도 적으면 또 적을수도 있는데,.. 데체 긴 내용은 어떻게 길이를 줄일까요',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'harnry',
      reputation: 3, // 평판
      createdAt: 'asked 7 mins ago',
    },
  },
  {
    id: 10,
    title: '10번째 글',
    likes: 2,
    answers: 8,
    views: 45,
    body: '내용이랄게 없지만서도 적으면 또 적을수도 있는데,.. 데체 긴 내용은 어떻게 길이를 줄일까요',
    tag: ['java', 'c++'],
    user: {
      userprofile: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      username: 'harnry',
      reputation: 3, // 평판
      createdAt: 'asked 7 mins ago',
    },
  },
];

export default dummyData;
