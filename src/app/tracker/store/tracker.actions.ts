import { Action } from '@ngrx/store';
import { Model } from '../models/model.model';

export const ADD_GUNDAM = '[Tracker] Add Gundam';
export const DELETE_GUNDAM = '[Tracker] Delete Gundam';
export const UPDATE_GUNDAM = '[Tracker] Update Gundam';
export const START_EDIT = '[Tracker] Start Editing';
export const STOP_EDIT = '[Tracker] Stop Editing';

export class AddGundam implements Action {
  readonly type = ADD_GUNDAM;

  constructor(public payload: Model) {}
}

export class DeleteGundam implements Action {
  readonly type = DELETE_GUNDAM;

  constructor(public payload: Model) {}
}

export class UpdateGundam implements Action {
  readonly type = UPDATE_GUNDAM;

  constructor(public payload: Model) {}
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;

  constructor() {}
}

export type TrackerActions =
  | AddGundam
  | DeleteGundam
  | UpdateGundam
  | StartEdit
  | StopEdit;
