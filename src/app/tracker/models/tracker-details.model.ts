import { Model } from "./model.model";

export interface TrackerDetails {
  models: Model[];
  editedModel: Model | null;
  editedModelIndex: number;
}
