import { createAction, props } from '@ngrx/store';
import { Model } from '../models/model.model';

export const addGundam = createAction('[Tracker] Add Gundam', props<Model>());
export const deleteGundam = createAction('[Tracker] Delete Gundam', props<Model>());
export const updateGundam = createAction('[Tracker] Update Gundam', props<Model>());
export const startEdit = createAction('[Tracker] Start Edit', props<{ index: number }>());
export const stopEdit = createAction('[Tracker] Stop Edit');
