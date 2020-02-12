import { createAction, props } from '@ngrx/store';

export const addSubitem = createAction(
  '[Subitem] Add',
  props<{ subitem: any }>()
);

export const getItens = createAction(
  '[Subitem] Get'
);

export const updateItens = createAction(
  '[Subitem] Update',
  props<{ itens: any[] }>()
);

export const deleteSubitem = createAction(
  '[Subitem] Delete',
  props<{ id: string }>()
);