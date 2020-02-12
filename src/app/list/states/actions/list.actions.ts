import { createAction, props } from '@ngrx/store';

export const updateList = createAction(
  '[List] Update',
  props<{ name: string }>()
);

export const updateListSuccess = createAction(
  '[List] Update Success',
  props<{ name: string }>()
);

export const updateListFailure = createAction(
  '[List] Update Failure',
  props<{ error: Error }>()
);