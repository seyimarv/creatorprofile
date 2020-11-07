import { QuestionActionTypes } from './Question.types';

const INITIAL_STATE = {
  currentAnswers: null,
  answered: false
};

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionActionTypes.SET_CURRENT_ANSWERS:
      return {
        ...state,
        currentAnswers: action.payload
      };
    case QuestionActionTypes.SET_ANSWERERED:
      return {
        ...state,
        answered: true
      };
    default:
      return state;
  }
};

export default answerReducer;