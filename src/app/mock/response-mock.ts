import {PatientResponse} from '../model/patient-response';

export const RESPONSES: PatientResponse[] = [
  {
    title: 'Открывание глаз',
    criteries: [
      {description: 'Отсутствует', mark: 'E', score: 1},
      {description: 'Как реакция на болевое раздражение', mark: 'E', score: 2},
      {description: 'Как реакция на вербальный стимул', mark: 'E', score: 3},
      {description: 'Произвольное ', mark: 'E', score: 4}
    ]
  },
  {
    title: 'Речевая реакция',
    criteries: [
      {description: 'Отсутствие речи', mark: 'V', score: 1},
      {description: 'Нечленораздельные звуки в ответ на заданный вопрос', mark: 'V', score: 2},
      {description: 'Словесная окрошка, ответ по смыслу не соответствует вопросу', mark: 'V', score: 3},
      {description: 'Больной дезориентирован, спутанная речь', mark: 'V', score: 4},
      {description: 'Больной ориентирован, быстрый и правильный ответ на заданный вопрос', mark: 'V', score: 5}
    ]
  },
  {
    title: 'Двигательная реакция',
    criteries: [
      {description: 'Отсутствие движений', mark: 'M', score: 1},
      {description: 'Патологическое разгибание в ответ на болевое раздражение', mark: 'M', score: 2},
      {description: 'Патологическое сгибание в ответ на болевое раздражение', mark: 'M', score: 3},
      {description: 'Отдёргивание конечности в ответ на болевое раздражение', mark: 'M', score: 4},
      {description: 'Целенаправленное движение в ответ на болевое раздражение (отталкивание)', mark: 'M', score: 5},
      {description: 'Выполнение движений по команде', mark: 'M', score: 6}
    ]
  }
];
