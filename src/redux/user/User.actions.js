import { UserActionTypes } from './User.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
export const LogOut = () => ({
  type: UserActionTypes.LOGOUT
})
