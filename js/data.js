import { getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';


const PHOTO_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MAX = 30;
const AVATAR = 6;

const COMMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  ' Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const DESCRIPTION = ['Многие вещи кажутся невозможными, пока ты не сделал первый шаг', 'У природы нет плохой погоды', 'Хорошая еда - хорошее настроение', ' Бесконечность = покой', 'На недельку до второго, я уеду в Комарово', 'Дети - цветы жизни', 'В жизни важен момент здесь и сейчас', 'Может кофе?', 'Мой железный конь', 'Хорошая фотография - это знать где стоять', 'В погоне за солнцем'];

const NAMES = ['Иван', 'Светлана', 'Виктор', 'Юлия', 'Игорь', 'Алексей'];

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENTS),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_MAX) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PHOTO_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export {getPictures};
