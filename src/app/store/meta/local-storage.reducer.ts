import { ActionReducer, INIT } from "@ngrx/store";
import { AppState } from "../app.state";

export const localStorageReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state, action) => {
    const localState = localStorage.getItem('state');

    if (localState && action.type === INIT) {
      try {
        return JSON.parse(localState);
      } catch (e) {
        localStorage.removeItem('state');
      }
    }

    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));

    return nextState;
  }
}
