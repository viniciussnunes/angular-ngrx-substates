import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Item] Add',
  props<{ item: any }>()
);

export const getItens = createAction(
  '[Item] Get'
);

export const updateItens = createAction(
  '[Item] Update',
  props<{ itens: any[] }>()
);

export const deleteItem = createAction(
  '[Item] Delete',
  props<{ id: string }>()
);