import { createSelector } from '@ngrx/store';
import { Model } from '../tracker/models/model.model';
import { selectGundams } from '../tracker/store/tracker.selectors';

export const selectAppState = createSelector(
  selectGundams,
  (gundams: Model[]) => {
    return {
      gundams,
    };
  }
);
