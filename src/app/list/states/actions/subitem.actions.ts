import { createAction, props } from "@ngrx/store";
import { Subitem } from "../";

export const loadSubitens = createAction("[Subitem] Load");

export const loadSubitensSuccess = createAction(
  "[Subitem] Load Success",
  props<{ subitens: Subitem[] }>()
);

export const loadSubitensFailure = createAction(
  "[Subitem] Load Failure",
  props<{ error: Error }>()
);

export const addSubitem = createAction(
  "[Subitem] Add",
  props<{ subitem: any }>()
);

export const updateSubitens = createAction(
  "[Subitem] Update",
  props<{ subitens: any[] }>()
);

export const deleteSubitem = createAction(
  "[Subitem] Delete",
  props<{ id: string }>()
);
