import {Criteries} from "../criteries";

export const VCrit: Criteries[] = [
  {description: 'Отсутствие речи', score: 1},
  {description: 'Нечленораздельные звуки в ответ на заданный вопрос', score: 2},
  {description: 'Словесная окрошка, ответ по смыслу не соответствует вопросу', score: 3},
  {description: 'Больной дезориентирован, спутанная речь', score: 4},
  {description: 'Больной ориентирован, быстрый и правильный ответ на заданный вопрос', score: 5}
];
