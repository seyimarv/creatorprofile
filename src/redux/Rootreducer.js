import { combineReducers } from 'redux';


import userReducer from './user/User.reducer.js'
import noteReducer from './Notes/Notes.reducer'
import answerReducer from './Questions/Questions.Reducer'




const rootReducer = combineReducers({
    user: userReducer,
    note: noteReducer,
    answer: answerReducer
});
  
export default rootReducer