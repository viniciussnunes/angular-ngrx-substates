import { createAction, props } from '@ngrx/store';

export const addSubitem = createAction(
  '[Subitem] Add',
  props<{ subitem: any }>()
);

export const getSubitens = createAction(
  '[Subitem] Get'
);

export const updateSubitens = createAction(
  '[Subitem] Update',
  props<{ subitens: any[] }>()
);

export const deleteSubitem = createAction(
  '[Subitem] Delete',
  props<{ id: string }>()
);