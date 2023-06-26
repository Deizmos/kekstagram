const GENERATE_CARD_COUNT = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Алексеева В.',
  'Белов И.',
  'Буров Т.',
  'Давыдова В.',
  'Иванов М.',
  'Иванова У.' ,
  'Сафонова В.',
  'Синицын А.',
  'Соколов Д.',
  'Шаповалова Ю.'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
function getRandomNoRepeatInteger (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const randomCommentsId = getRandomNoRepeatInteger(1, 500);
const randomAvatarUrlNumber = getRandomInteger(1,6);
const randomMessageText = COMMENTS[getRandomInteger(0, COMMENTS.length - 1)];
const randomNameAutor = NAMES[getRandomInteger(0, NAMES.length - 1)];
const createComment = () => ({
  id: randomCommentsId(),
  avatar: `img/avatar-${randomAvatarUrlNumber}.svg`,
  message: randomMessageText,
  name: randomNameAutor,
});

const randomFotoId = getRandomNoRepeatInteger(1, GENERATE_CARD_COUNT);
const randomUrl = getRandomNoRepeatInteger(1, GENERATE_CARD_COUNT);
const randomLikes = getRandomInteger(15, 200);
const amountComments = getRandomInteger (1, 30);
const generateComments = Array.from({length: amountComments}, createComment);


const createCard = () => ({
  id: randomFotoId(),
  url:`photos/${randomUrl()}.jpg`,
  description: 'Очень красивое описание фотографии',
  likes: randomLikes,
  comments:[generateComments]
});
const generateCards = Array.from({length: GENERATE_CARD_COUNT}, createCard);

export {
  generateCards
};
