import { NoteActionTypes } from './Notes.types';

export const setCurrentNoteArray = noteArray => ({
  type: NoteActionTypes.SET_CURRENT_NOTE_ARRAY,
  payload: noteArray
});

export const deleteNote = note => ({
  type: NoteActionTypes.DELETE_NOTE,
  payload: note
})
