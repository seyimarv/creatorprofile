import { NoteActionTypes } from './Notes.types';

const INITIAL_STATE = {
  currentNoteArray: [],
  isDeleted: false
};

const noteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NoteActionTypes.SET_CURRENT_NOTE_ARRAY:
      return {
        ...state,
        currentNoteArray: action.payload
      };
    case NoteActionTypes.DELETE_NOTE:
       return {
         ...state,
         currentNoteArray: state.currentNoteArray.filter(
          note => note.id !== action.payload.id
         ),
         isDeleted: true
       }
    default:
      return state;
  }
};

export default noteReducer;