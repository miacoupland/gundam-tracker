import { ActionReducer, INIT } from "@ngrx/store";
import { AppState } from "../app.state";

export const localStorageReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state, action) => {
    const localState = localStorage.getItem('state');

    if (localState && action.type === INIT) {
      try {
        const appState = JSON.parse(localState);
        const stateKeys = Object.keys(appState);
        const tracker = stateKeys.includes('tracker');
        // const auth = stateKeys.includes('auth');

        return appState;
      } catch (e) {
        localStorage.removeItem('state');
      }
    }

    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));

    return nextState;
  }
}
