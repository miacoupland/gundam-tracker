import { GradeEnum } from "./grade.enum";
import { UniverseEnum } from "./universe.enum";

export interface Model {
  name: string;
  universe: UniverseEnum;
  picture: string;
  collected: boolean;
  built: boolean;
  cost: string;
  grade: GradeEnum;
  notes: string;
}
