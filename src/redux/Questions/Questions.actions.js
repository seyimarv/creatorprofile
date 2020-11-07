import { QuestionActionTypes } from './Question.types';

export const setCurrentAnswers = answers => ({
  type: QuestionActionTypes.SET_CURRENT_ANSWERS,
  payload: answers
});
export const setAnswered = () => ({
  type: QuestionActionTypes.SET_ANSWERED,
  
});
