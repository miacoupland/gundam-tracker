import * as TrackerActions from './tracker.actions';
import { TrackerDetails } from '../models/tracker-details.model';
import { createReducer, on } from '@ngrx/store';

const initialTrackerState: TrackerDetails = {
  models: [],
  editedModel: null,
  editedModelIndex: -1,
};

export const trackerReducer = createReducer(
  initialTrackerState,
  on(
    TrackerActions.addGundam,
    (state, model): TrackerDetails => ({
      ...state,
      models: [...state.models, model],
    })
  ),
  on(
    TrackerActions.deleteGundam,
    (state, model): TrackerDetails => ({
      ...state,
      models: state.models.filter((md, mdIndex) => {
        return mdIndex !== state.editedModelIndex;
      }),
      editedModelIndex: -1,
      editedModel: null,
    })
  ),

  on(TrackerActions.updateGundam, (state, model): TrackerDetails => {
    const selectedModel = state.models[state.editedModelIndex];
    const updatedModel = {
      ...selectedModel,
      ...model,
    };
    const updatedModels = [...state.models];
    updatedModels[state.editedModelIndex] = updatedModel;
    return {
      ...state,
      models: updatedModels,
      editedModelIndex: -1,
      editedModel: null,
    };
  }),
  on(
    TrackerActions.startEdit,
    (state, { index }): TrackerDetails => ({
      ...state,
      editedModelIndex: index,
      editedModel: { ...state.models[index] },
    })
  ),
  on(
    TrackerActions.stopEdit,
    (state): TrackerDetails => ({
      ...state,
      editedModel: null,
      editedModelIndex: -1,
    })
  )
);
