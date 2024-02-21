import { Model } from '../models/model.model';
import * as TrackerActions from './tracker.actions';

export interface State {
  models: Model[];
  editedModel: Model | null;
  editedModelIndex: number;
}

const initialState = {
  models: [],
  editedModel: null,
  editedModelIndex: -1,
};

export function trackerReducer(
  state: State = initialState,
  action: TrackerActions.TrackerActions
) {
  switch (action.type) {
    case TrackerActions.ADD_GUNDAM:
      return {
        ...state,
        models: [...state.models, action.payload],
      };
    case TrackerActions.DELETE_GUNDAM:
      return {
        ...state,
        models: state.models.filter((md, mdIndex) => {
          return mdIndex !== state.editedModelIndex;
        }),
        editedModelIndex: -1,
        editedModel: null,
      };
    case TrackerActions.UPDATE_GUNDAM:
      const model = state.models[state.editedModelIndex];
      const updatedModel = {
        ...model,
        ...action.payload,
      };
      const updatedModels = [...state.models];
      updatedModels[state.editedModelIndex] = updatedModel;
      return {
        ...state,
        models: updatedModels,
        editedModelIndex: -1,
        editedModel: null,
      };
    case TrackerActions.START_EDIT:
      return {
        ...state,
        editedModelIndex: action.payload,
        editedModel: { ...state.models[action.payload] },
      };
    case TrackerActions.STOP_EDIT:
      return {
        ...state,
        editedModel: null,
        editedModelIndex: -1,
      };
    default:
      return state;
  }
}
