import { ActionReducerMap } from '@ngrx/store';
import * as tracker from '../tracker/store/tracker.reducer';

export interface AppState {
  tracker: tracker.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  tracker: tracker.trackerReducer,
};
