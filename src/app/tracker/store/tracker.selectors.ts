import { createSelector } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Model } from '../models/model.model';
import { TrackerDetails } from '../models/tracker-details.model';

export const tracker = (state: AppState): TrackerDetails => state.tracker;

export const selectGundams = createSelector(
  tracker,
  (tracker: TrackerDetails): Model[] => {
    return tracker.models;
  }
);
