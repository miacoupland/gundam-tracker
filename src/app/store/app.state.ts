import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { TrackerDetails } from '../tracker/models/tracker-details.model';
import { isDevMode } from '@angular/core';
import { trackerReducer } from '../tracker/store/tracker.reducer';

export interface AppState {
  tracker: TrackerDetails;
  // auth: auth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  tracker: trackerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
