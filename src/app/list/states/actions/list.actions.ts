import { createAction, props } from '@ngrx/store';

export const updateList = createAction(
  '[List] Update',
  props<{ list: any }>()
);

export const updateListSuccess = createAction(
  '[List] Update Success',
  props<{ list: any }>()
);

export const updateListFailure = createAction(
  '[List] Update Failure',
  props<{ error: Error }>()
);