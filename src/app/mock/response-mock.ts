import {PatientResponse} from '../model/patientResponse';

export const RESPONSES: PatientResponse[] = [
  {
    title: 'Открывание глаз',
    mark: 'E',
    criteries: [
      {description: 'Отсутствует', score: 1},
      {description: 'Как реакция на болевое раздражение', score: 2},
      {description: 'Как реакция на вербальный стимул', score: 3},
      {description: 'Произвольное ', score: 4}
    ]
  },
  {
    title: 'Речевая реакция',
    mark: 'V',
    criteries: [
      {description: 'Отсутствие речи', score: 1},
      {description: 'Нечленораздельные звуки в ответ на заданный вопрос', score: 2},
      {description: 'Словесная окрошка, ответ по смыслу не соответствует вопросу', score: 3},
      {description: 'Больной дезориентирован, спутанная речь', score: 4},
      {description: 'Больной ориентирован, быстрый и правильный ответ на заданный вопрос', score: 5}
    ]
  },
  {
    title: 'Двигательная реакция',
    mark: 'M',
    criteries: [
      {description: 'Отсутствие движений', score: 1},
      {description: 'Патологическое разгибание в ответ на болевое раздражение', score: 2},
      {description: 'Патологическое сгибание в ответ на болевое раздражение', score: 3},
      {description: 'Отдёргивание конечности в ответ на болевое раздражение', score: 4},
      {description: 'Целенаправленное движение в ответ на болевое раздражение (отталкивание)', score: 5},
      {description: 'Выполнение движений по команде', score: 6}
    ]
  }
];
